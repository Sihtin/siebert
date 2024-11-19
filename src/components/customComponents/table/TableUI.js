import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid2";

import { nanoid } from "nanoid";
import { assetKeys } from "../../../util/constant/AssetsConstants";
import { globalMessages } from "../../../util/constant/StringConstants";
import CustomCheckbox from "../../formUI/CustomCheckbox";
import { tableStyle } from "./TableStyle";

const TableUI = ({ tableData, tableHeight, redirection, statusDisplay }) => {
  const dispatch = useDispatch();
  const [, setClicked] = useState(false);
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  const [selectedIds, setSelectedIds] = useState([]);

  const getInnerArrayData = ({ innerArrayObjectKey, cellValue, cellValueLength, currentCellValueIndex }) => {
    let innerCellValue = cellValue;

    if (innerArrayObjectKey.includes("firstName")) {
      const fullName = `${innerCellValue?.user?.firstName} ${innerCellValue?.user?.lastName}`;
      if (currentCellValueIndex < cellValueLength - 1) {
        return `${fullName}, `;
      } else {
        return fullName;
      }
    }

    innerCellValue = innerArrayObjectKey.map((key) => {
      if (innerCellValue.price || innerCellValue.price === 0) {
        return `$${innerCellValue[key]}`;
      }
      return innerCellValue[key];
    });

    if (currentCellValueIndex < cellValueLength - 1) {
      return `${innerCellValue}, `;
    } else {
      return innerCellValue;
    }
  };

  const renderCellValue = (tableCellValues, innerArrayKey, fieldAlign) => {
    if (typeof tableCellValues === "object" && Array.isArray(innerArrayKey)) {
      let cellValue = tableCellValues;

      for (const key of innerArrayKey) {
        // eslint-disable-next-line no-prototype-builtins
        if (cellValue?.hasOwnProperty(key)) {
          cellValue = cellValue[key];
        } else {
          return <TableCell key={key}></TableCell>;
        }
      }

      return (
        <TableCell align={fieldAlign ?? "left"} className="table-cell-data">
          {cellValue}
        </TableCell>
      );
    }
  };

  const handleSelectAllClick = () => {
    setSelectAllChecked((prevChecked) => !prevChecked);
    if (!selectAllChecked) {
      const allIds = tableData?.tableContents?.map((contentRow) => contentRow.id) ?? [];
      setSelectedIds(allIds);
    } else {
      setSelectedIds([]);
    }
  };

  const handleCheckboxClick = (id) => {
    const index = selectedIds.indexOf(id);
    if (index !== -1) {
      const updatedIds = selectedIds.filter((selectedId) => selectedId !== id);
      setSelectedIds(updatedIds);
      setSelectAllChecked(false);
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const getHeaderDesign = () => {
    return (
      <TableRow>
        {tableData?.tableFields?.map((field, columnIndex) => {
          const tableWidth = field.width || "";
          if (field.checkbox) {
            return (
              <TableCell key={columnIndex} sx={{ zIndex: 2, backgroundColor: "#e1fbf0" }} data-testid="table-cell">
                <CustomCheckbox
                  checked={selectAllChecked}
                  onChange={handleSelectAllClick}
                  data-testid="custom-checkbox"
                />
              </TableCell>
            );
          }
          return (
            <TableCell key={columnIndex} sx={{ width: tableWidth, zIndex: 1, backgroundColor: "#e1fbf0" }}>
              <Grid
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                sx={{ fontFamily: "OpenSans", fontSize: "16px", fontWeight: 600 }}
              >
                {tableData?.tableHeaders[columnIndex]}
              </Grid>
            </TableCell>
          );
        })}
      </TableRow>
    );
  };

  const tableCellRouting = (contentRow, field) => {
    // Need to Implement
  };

  const renderArrayOfObject = (cellValue, innerKey) => {
    let concatCellValue = "";
    for (let i = 0; i < cellValue?.length; i++) {
      for (let j = 0; j < innerKey?.length; j++) {
        let objectData = cellValue[i];
        if (j === innerKey?.length - 1 && i !== cellValue.length - 1) {
          concatCellValue = `${concatCellValue + objectData[innerKey[j]]}, `;
        } else {
          concatCellValue = `${concatCellValue + objectData[innerKey[j]]} `;
        }
      }
    }
    return <TableCell align="left">{concatCellValue}</TableCell>;
  };

  const convertToAreaTimeZone = (fieldName, timeZone, startDate) => {
    return startDate;
  };

  const getRowContent = () => {
    return tableData?.tableContents?.map((contentRow, rowIndex) => (
      <TableRow className={tableData?.skip || redirection === false ? "" : "table-row-cursor"} key={rowIndex}>
        {tableData?.tableFields.map((field) => {
          let fieldName = field.id;
          let concatId = field?.concatId;
          let startDate = field?.startTime;
          let innerArrayKey = field.innerId;
          let dollarSign = field?.dollarSign ? "$" : "";
          let showMap = field?.showMapIcon ? true : false;
          let tableCellValue = field.isConvertToTimezone
            ? convertToAreaTimeZone(contentRow[fieldName], contentRow?.timeZone?.timeZone, contentRow[startDate])
            : contentRow[fieldName];
          let tableWidth = field.width;
          if (concatId) {
            tableCellValue = `${tableCellValue ? tableCellValue + "-" : ""}${
              field.isConvertToTimezone
                ? convertToAreaTimeZone(contentRow[concatId], contentRow?.timeZone?.timeZone, contentRow[startDate])
                : contentRow[concatId]
            }`;
          } else if (field.enrollment) {
            tableCellValue = `${tableCellValue} / ${contentRow[field.subId]}`;
          } else {
            tableCellValue =
              field?.showMaxChar && tableCellValue?.length > field?.showMaxChar
                ? tableCellValue.slice(0, field?.showMaxChar) + "..."
                : tableCellValue;
          }
          return (
            <React.Fragment key={nanoid()}>
              {field.isArray ? (
                <TableCell className="table-cell-data" align={field.align ?? "left"} sx={{ width: tableWidth }}>
                  {field.isArray && tableCellValue?.length === 0
                    ? globalMessages.initialPriceValue
                    : tableCellValue?.map((value, innerArrayIndex) =>
                        Array.isArray(innerArrayKey) ? (
                          <span key={nanoid()}>
                            {getInnerArrayData({
                              innerArrayObjectKey: innerArrayKey,
                              cellValue: value,
                              cellValueLength: tableCellValue.length,
                              currentCellValueIndex: innerArrayIndex,
                            })}
                          </span>
                        ) : (
                          `${value} `
                        ),
                      )}
                </TableCell>
              ) : field.navigationLink ? (
                <TableCell
                  onClick={(event) => event.stopPropagation()}
                  align={field.align ?? "left"}
                  className="link-cell-data"
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#037547",
                      fontStyle: "OpenSans",
                      fontWeight: 400,
                      fontSize: "14px",
                      letterSpacing: "0.5px",
                    }}
                    to={tableCellRouting(contentRow, field)}
                  >
                    {tableCellValue}
                  </Link>
                </TableCell>
              ) : field.isObject ? (
                renderCellValue(tableCellValue, innerArrayKey, field.align)
              ) : field.isArrayOfObject ? (
                renderArrayOfObject(tableCellValue, field.innerObjectKeys)
              ) : field.checkbox ? (
                <TableCell align={field.align ?? "left"} width={"1px"} onClick={(e) => e.stopPropagation()}>
                  <CustomCheckbox
                    checked={selectAllChecked || selectedIds.includes(contentRow.id)}
                    onChange={() => {
                      setClicked(true);
                      handleCheckboxClick(contentRow.id);
                    }}
                  />
                </TableCell>
              ) : (
                <TableCell
                  align={field.align ?? "left"}
                  sx={{
                    width: tableWidth,
                    fontFamily: "OpenSans",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}
                >
                  <Grid container spacing={0}>
                    <Grid item md={12} lg={12}>
                      {dollarSign}
                      {tableCellValue?.length > 45 ? tableCellValue.slice(0, 45) + "..." : tableCellValue}
                    </Grid>
                  </Grid>
                </TableCell>
              )}
            </React.Fragment>
          );
        })}
      </TableRow>
    ));
  };

  return (
    <div className="customScroll">
      <TableContainer
        className="customScroll"
        sx={{ ...tableStyle.tableContainer, height: `${tableHeight}` }}
        component={Paper}
      >
        <Table stickyHeader>
          <TableHead className={"table-head"}>{getHeaderDesign()}</TableHead>
          <TableBody>
            {tableData?.tableContents && tableData?.tableContents.length > 0 ? (
              getRowContent()
            ) : (
              <TableRow>
                <TableCell align="center" colSpan={24}>
                  {globalMessages.noDataFound}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableUI;
