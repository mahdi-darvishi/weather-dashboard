import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import MainBackground from "../assets/images/LoginBackground.png";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { useLanguage } from "../context/useLanguage";
import { useAuth } from "../context/useAuth";

const LoginPage = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [name, setName] = useState("");
  const { login } = useAuth();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name.length < 8) return;
    login(name);
  };
  return (
    <Box>
      <Grid
        container
        boxShadow={1}
        bgcolor="background.panel"
        borderRadius={1.5}
        minWidth={{
          sm: 600,
          md: 900,
          lg: 1200,
        }}
      >
        <Grid
          size={{
            sm: 12,
            md: 6,
          }}
          bgcolor="surface.50"
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            px={{ xs: 7, md: 10 }}
            py={{ xs: 8, md: 0 }}
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
            height="100%"
            gap={{ xs: 8, md: 25 }}
          >
            <Stack alignItems={"center"} spacing={{ xs: 3, md: 4 }}>
              <Typography
                variant="h4"
                component="h1"
                fontSize={{ xs: 20, md: 25 }}
                fontWeight={700}
                color="text.secondary"
              >
                {t("login.login")}
              </Typography>

              <TextField
                label={t("login.enterYourName")}
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={name.length > 0 && name.length < 8}
                helperText={
                  name.length > 0 && name.length < 8
                    ? t("login.errorMessage")
                    : ""
                }
              />
            </Stack>

            <Stack>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                disabled={name.length > 0 && name.length < 8}
              >
                {t("login.login")}
              </Button>
            </Stack>
          </Box>
        </Grid>

        <Grid
          size={6}
          display={{
            xs: "none",
            md: "grid",
          }}
        >
          <Box
            component="img"
            src={MainBackground}
            alt="Background"
            width="100%"
            height="100%"
            sx={{
              objectFit: "cover",
              borderRadius: 1.5,
            }}
            ml={isRTL ? 6 : 0}
          ></Box>
        </Grid>
      </Grid>

      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={{ xs: 3, md: 5 }}
        mx={"auto"}
        maxWidth={{ xs: 180, md: 220 }}
      >
        <LanguageSwitcher />
      </Box>
    </Box>
  );
};

export default LoginPage;
