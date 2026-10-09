# Production Configuration for Galerija Omerzel

## Environment Variables for Production

Create a `.env.local` file with these variables:

```env
# Admin Configuration
ADMIN_PASSWORD=your_secure_password_here

# Gallery Information
NEXT_PUBLIC_GALLERY_NAME=Galerija Omerzel
NEXT_PUBLIC_GALLERY_ADDRESS=Cesta svobode 19, 4260 Bled, Slovenia
NEXT_PUBLIC_GALLERY_PHONE=+386 40 855 755
NEXT_PUBLIC_GALLERY_EMAIL=galerija.omerzel@gmail.com

# Production Settings
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## Security Notes

1. **Change Admin Password**: Update `ADMIN_PASSWORD` to a strong, unique password
2. **Environment Variables**: Never commit `.env.local` to version control
3. **HTTPS**: Always use HTTPS in production
4. **Backup**: Set up regular database backups if using a database

## Deployment Checklist

- [ ] Update admin password
- [ ] Set up domain and SSL
- [ ] Configure environment variables
- [ ] Test all functionality
- [ ] Set up monitoring and analytics
- [ ] Create backup strategy
