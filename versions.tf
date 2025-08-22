terraform {
  required_version = ">= 1.5.0"

  required_providers {
    netlify = {
      source  = "netlify/netlify"
      version = "0.2.3"
    }
  }

  cloud {
    organization = "Samie_HUG"  # Your Terraform Cloud org
    workspaces {
      name = "Portfolio_netlify_demo"   # Your Terraform Cloud workspace
    }
  }
}