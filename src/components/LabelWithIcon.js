import { Icon, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function LabelWithIcon({
  startIcon,
  text,
  endIcon,
  variant,
  customIconStyles,
  customTextStyles,
  wrapperStyles,
  isRequired,
  toolTip,
  count,
  isOptional,
}) {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", ...wrapperStyles }}>
        {startIcon && (
          <Icon style={{ ...customIconStyles }} sx={{ mr: 1 }}>
            {startIcon}
          </Icon>
        )}
        <Typography variant={variant} sx={{ ...customTextStyles }}>
          {text}
          {isOptional ? (
            <Typography variant={variant}>{` `} (optional)</Typography>
          ) : null}
          {isRequired && (
            <Typography
              component={"span"}
              color="error"
              sx={{ lineHeight: "inherit", ml: 1 }}
            >
              *
            </Typography>
          )}
        </Typography>
        {toolTip && toolTip.icon && (
          <Tooltip title={toolTip.title} arrow>
            <Icon style={{ ...customIconStyles }} sx={{ mr: 1 }}>
              {toolTip.icon}
            </Icon>
          </Tooltip>
        )}
        {endIcon && (
          <Icon
            style={{
              fontSize: 14,
              ...customIconStyles,
            }}
            sx={{ mr: 1 }}
          >
            {endIcon}
          </Icon>
        )}
        {count && count.number && (
          <Typography
            sx={{
              padding: "0px 4px",
              marginLeft: "8px",
              backgroundColor: "rgba(0, 87, 255, 0.1)",
            }}
            variant="owSubheadline4Semibold"
            color={count.active ? "primary" : "secondary"}
          >
            {count.number}
          </Typography>
        )}
      </Box>
    </>
  );
}

export default LabelWithIcon;
