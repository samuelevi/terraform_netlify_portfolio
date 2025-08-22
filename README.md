# Terraform Netlify Challenge - Complete Setup Guide

A modern Infrastructure as Code project that deploys a static website to Netlify using Terraform with HCP Terraform remote state management.

## 🚀 Live Demo
*Your live site URL will appear here after deployment*

## 📋 Prerequisites

Before you begin, ensure you have:

1. **Terraform installed** (v1.0+)
   ```bash
   # On macOS
   brew install terraform
   
   # On Windows (using Chocolatey)
   choco install terraform
   
   # On Linux (Ubuntu/Debian)
   wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
   echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
   sudo apt update && sudo apt install terraform
   ```

2. **Netlify Account & Personal Access Token**
   - Sign up at [netlify.com](https://netlify.com)
   - Go to [User Settings > Applications](https://app.netlify.com/user/applications)
   - Generate a "Personal Access Token"
   - Save the token (starts with `nfp_`)

3. **HCP Terraform Account**
   - Sign up at [app.terraform.io](https://app.terraform.io)
   - Create an organization (or use existing)
   - Create a workspace for this project

## 🛠️ Setup Instructions

### Step 1: Clone/Download Project Files

Create a new directory and add all the project files:

```bash
mkdir terraform-netlify-challenge
cd terraform-netlify-challenge
```

### Step 2: Configure Your Settings

1. **Copy `terraform.tfvars.example` to `terraform.tfvars`**:
   ```bash
   cp terraform.tfvars.example terraform.tfvars
   ```

2. **Edit `terraform.tfvars`** with your settings:
   ```hcl
   # Site configuration
   site_name = "my-terraform-challenge"
   site_directory = "./site"
   
   # HCP Terraform configuration
   hcp_organization = "YOUR_HCP_ORG_NAME"
   hcp_workspace = "YOUR_WORKSPACE_NAME"
   
   # Optional: Custom domain (leave empty for Netlify subdomain)
   custom_domain = ""
   ```

3. **Update `main.tf`** cloud block with your HCP details:
   ```hcl
   cloud {
     organization = "YOUR_HCP_ORG_NAME"
     
     workspaces {
       name = "YOUR_WORKSPACE_NAME"
     }
   }
   ```

### Step 3: Configure HCP Terraform Workspace

1. **Log in to HCP Terraform**: https://app.terraform.io
2. **Navigate to your workspace**: `Your-Org` → `Your-Workspace`
3. **Go to Variables tab**
4. **Add Environment Variable**:
   - Click "Add variable"
   - Type: "Environment variable"
   - Key: `NETLIFY_TOKEN`
   - Value: `your-netlify-personal-access-token`
   - Mark as "Sensitive" ✓
   - Save

### Step 4: Authenticate Terraform

```bash
# Authenticate with HCP Terraform
terraform login
```

This will:
- Open your browser to generate an API token
- Save the token locally for Terraform CLI

### Step 5: Deploy Your Site

```bash
# Initialize Terraform (connects to HCP backend)
terraform init

# Review what will be created
terraform plan

# Deploy the infrastructure
terraform apply
```

Type `yes` when prompted to confirm the deployment.

### Step 6: Access Your Live Site

After successful deployment, Terraform will output:
- `site_url`: Your live Netlify site URL
- `admin_url`: Netlify admin panel URL
- `ssl_url`: HTTPS URL of your site

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

## 📝 Challenge Requirements Checklist

- ✅ Deploy static site on Netlify using Terraform
- ✅ Store state remotely in HCP Terraform
- ✅ Re-runnable with fresh credentials
- ✅ All secrets kept out of repository
- ✅ Providers configuration (Netlify, Random)
- ✅ Resources to create the site
- ✅ Variables for custom inputs
- ✅ Outputs (live site URL)
- ✅ Comprehensive documentation

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for the Terraform Challenge**

