# Terraform Netlify Challenge - Complete Setup Guide

A modern Infrastructure as Code project that deploys a static website to Netlify using Terraform with HCP Terraform remote state management.

## 🚀 Live Demo
*Your live site URL will appear here after deployment*

## 🛠️ Setup Instructions

### Step 1: Clone/Download Project Files

Create a new directory and add all the project files:

## 📁 Project Structure

```
terraform-netlify-challenge/
├── site/                          # Static website files
│   ├── index.html                # Main HTML file
│   └── assets/
│       ├── css/style.css         # Styles
│       └── js/script.js          # JavaScript
├── main.tf                       # Main Terraform configuration
├── variables.tf                  # Input variables
├── outputs.tf                    # Output values
├── terraform.tfvars.example      # Example variables file
├── .gitignore                    # Git ignore rules
├── .terraformignore             # Terraform ignore rules
└── README.md                     # This file
```

## 🔧 Customization

### Modify the Website
- Edit files in the `site/` directory
- Run `terraform apply` to redeploy changes

### Change Site Name
- Update `site_name` in `terraform.tfvars`
- Run `terraform apply`

### Add Custom Domain
- Set `custom_domain` in `terraform.tfvars`
- Configure DNS to point to Netlify
- Run `terraform apply`

## 🧹 Cleanup

To destroy all resources:

```bash
terraform destroy
```

Type `yes` when prompted.

## 🔒 Security Features

- ✅ Netlify token stored securely in HCP Terraform workspace variables
- ✅ No secrets in code repository
- ✅ Remote state managed by HCP Terraform
- ✅ All sensitive data excluded from version control

## 🚨 Troubleshooting

### Common Issues

1. **"Variables not allowed" error**
   - Ensure the `cloud` block in `main.tf` uses literal values, not variables

2. **"Required token could not be found"**
   - Run `terraform login` to authenticate

3. **Netlify authentication failed**
   - Verify your `NETLIFY_TOKEN` is correct in HCP workspace variables
   - Ensure the token has proper permissions

4. **Workspace not found**
   - Verify organization and workspace names in both `main.tf` and `terraform.tfvars`

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for the Terraform Challenge**

