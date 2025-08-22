terraform {
  required_version = ">= 1.0"
  
  required_providers {
    netlify = {
      source  = "AegirHealth/netlify"
      version = "~> 0.1"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.4.0"
    }
  }

  # HCP Terraform (Terraform Cloud) backend configuration
  cloud {
    organization = "Samie_HUG"
    
    workspaces {
      name = "Portfolio_netlify_demo"
    }
  }
}

# Configure the Netlify Provider
provider "netlify" {
  # Token is set via NETLIFY_TOKEN environment variable
  # or through HCP Terraform workspace variables
}

# Random suffix for unique site naming
resource "random_id" "site_suffix" {
  byte_length = 4
}

# Create the Netlify site
# Create the Netlify site
resource "netlify_site" "main" {
  name = "${var.site_name}-${random_id.site_suffix.hex}"
  
  # Custom domain configuration (optional)
  custom_domain = var.custom_domain != "" ? var.custom_domain : null
}


