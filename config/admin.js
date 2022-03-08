module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3e7a41c52cea79568d911d2794623c64'),
  },
});
