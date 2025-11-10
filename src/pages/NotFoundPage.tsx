import HomeIcon from "@mui/icons-material/Home"; // آیکون برای دکمه
import { Box, Button, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom"; // برای دکمه

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    // ۱. کانتینر اصلی صفحه (پس‌زمینه گرادینت و وسط‌چین)
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // ارتفاع کامل صفحه
        width: "100%",
        p: { xs: 2, sm: 3 }, // پدینگ در موبایل
        /* @noflip */
        background: (theme) => `/* @noflip */ ${theme.gradients.main}`,
      }}
    >
      {/* ۲. کارت سفیدرنگ (مشابه کارت لاگین) */}
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, md: 5 }, // پدینگ داخلی
          borderRadius: 2, // گردی گوشه‌ها
          textAlign: "center",
          maxWidth: 500, // حداکثر عرض
          width: "100%",
        }}
      >
        {/* ۳. متن بزرگ "404" */}
        <Typography
          variant="h1"
          fontWeight={700}
          component="div"
          color="primary.main" // استفاده از رنگ اصلی تم
          sx={{
            fontSize: { xs: "6rem", md: "10rem" }, // فونت ریسپانسیو
            lineHeight: 1,
          }}
        >
          404
        </Typography>

        {/* ۴. پیام خطا (قابل ترجمه) */}
        <Typography
          variant="h5"
          component="h2"
          color="text.secondary"
          gutterBottom
          sx={{ mt: 2 }}
        >
          {t("notFound.title")}
        </Typography>

        <Typography color="text.secondary">
          {t("notFound.description")}
        </Typography>

        {/* ۵. دکمه بازگشت به خانه (راه خروج) */}
        <Button
          component={RouterLink} // استفاده از Link روتر
          to="/" // هدایت به صفحه‌ی اصلی
          variant="contained"
          size="large"
          startIcon={<HomeIcon />}
          sx={{ mt: 4 }}
        >
          {t("notFound.goHome")}
        </Button>
      </Paper>
    </Box>
  );
};

export default NotFoundPage;
