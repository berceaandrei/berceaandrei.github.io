import {
  PaletteColorOptions,
  PaletteColor,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: PaletteColor;
  }

  interface PaletteOptions {
    neutral?: PaletteColorOptions;
  }

  interface TypographyVariants {
    body3: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    caption2?: React.CSSProperties;
  }

  interface Theme {
    customShadows: {
      large: string;
      medium: string;
      small: string;
    };
  }
  interface ThemeOptions {
    customShadows?: {
      large?: string;
      medium?: string;
      small?: string;
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
    caption2: true;
  }
}
declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    active: true;
    inactive: true;
    project: true;
    icon: true;
  }
}

let theme = createTheme({
  spacing: 4,
  palette: {
    mode: "light",
    primary: {
      main: "#FED000",
    },
    secondary: {
      main: "#FBFBFB",
      light: "#FFF0AA",
      dark: "#CDA000",
    },
    error: {
      main: "#D76E78",
      light: "#FFDCD7",
    },
    success: {
      main: "#209F94",
      light: "#DAF2EE",
    },
    text: {
      primary: "#FBFBFB",
      secondary: "#1D1617",
      disabled: "#FFFFFF",
    },
    neutral: {
      dark: "#A1A1A1",
      main: "#D8D8D8",
      light: "#FBFBFB",
    },
  },
});

theme = createTheme(theme, {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
  typography: {
    fontFamily: "Inter",
    fontSize: 16,
    h1: {
      fontFamily: "Inter",
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Inter",
      fontSize: "1.75rem",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Inter",
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: "Inter",
      fontSize: "1.125rem",
      fontWeight: 400,
    },
    button: {
      fontFamily: "Inter",
      fontSize: "1rem",
      fontWeight: 600,
    },
    body1: {
      fontFamily: "Inter",
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontFamily: "Inter",
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    body3: {
      fontFamily: "Inter",
      fontSize: "0.875rem",
      fontWeight: 500,
    },
    caption: {
      fontFamily: "Inter",
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    caption2: {
      fontFamily: "Inter",
      fontSize: "0.75rem",
      fontWeight: 600,
    },
  },

  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "underline",
          fontSize: "1rem",
          fontWeight: 600,
          color: theme.palette.text.primary,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "100%",
          borderRadius: theme.spacing(4),
          boxShadow: "none",
          padding: `${theme.spacing(4)} ${theme.spacing(5)}`,
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            boxShadow: "none",
          },
          textTransform: "none",
          color: theme.palette.text.primary,
        },
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            border: "1px solid",
            borderColor: theme.palette.secondary.main,
            "&:hover": {
              backgroundColor: theme.palette.secondary.light,
            },
          },
        },
        {
          props: { variant: "text" },
          style: {
            "&:hover": {
              background: "none",
            },
          },
        },
      ],
    },

    MuiChip: {
      variants: [
        {
          props: { variant: "active" },
          style: {
            backgroundColor: theme.palette.success.light,
            color: theme.palette.success.main,
            borderRadius: theme.spacing(2),
          },
        },
        {
          props: { variant: "inactive" },
          style: {
            backgroundColor: theme.palette.neutral.light,
            color: theme.palette.neutral.dark,
            borderRadius: theme.spacing(2),
          },
        },
        {
          props: { variant: "project" },
          style: {
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.secondary.dark,
          },
        },
        {
          props: { variant: "icon" },
          style: {
            backgroundColor: theme.palette.secondary.light,
          },
        },
      ],
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          padding: "0px",
          border: "1px",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
          boxShadow: "none",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderRadius: theme.spacing(4),
              borderWidth: 1,
            },
            color: "inherit",
            "&:hover fieldset": {
              borderColor: "inherit",
            },
            "&.Mui-focused fieldset": {
              borderColor: "inherit",
              borderWidth: 1,
            },
          },
          "& .MuiFormLabel-root": {
            color: "inherit",
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: "inherit",
          },
        },
      },
    },

    MuiGrid: {
      styleOverrides: {
        root: {
          "& .MuiGrid-item": {
            padding: 0,
          },
          paddingTop: "0px",
          paddingLeft: 0,
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(),
          disableElevation: true,
        },
      },
    },

    MuiPickersDay: {
      styleOverrides: {
        root: {
          "&:focus": {
            "&.Mui-selected": {
              backgroundColor: theme.palette.primary.main,
            },
          },
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
          },
        },
      },
    },

    MuiTimelineItem: {
      styleOverrides: {
        root: {
          "&:before": {
            display: "none",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.text.disabled,
          boxShadow: "0px 2px 10px 0px rgba(208, 210, 214, 0.50)",
          borderRadius: theme.spacing(4),
          padding: theme.spacing(6),
        },
      },
    },
  },
  customShadows: {
    large: "0px 6px 20px 0px rgba(29, 22, 23, 0.10)",
    medium: "0px 6px 10px 0px rgba(29, 22, 23, 0.10)",
    small: "0px 2px 10px 0px rgba(208, 210, 214, 0.50)",
  },
});

theme = responsiveFontSizes(theme, { breakpoints: ["sm", "md", "lg"] });

export default theme;
