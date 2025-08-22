variable "site_name" {
  description = "Base name for the Netlify site"
  type        = string
  default     = "terraform-challenge"
  
  validation {
    condition     = can(regex("^[a-z0-9-]+$", var.site_name))
    error_message = "Site name must contain only lowercase letters, numbers, and hyphens."
  }
}

variable "site_directory" {
  description = "Local directory containing the static site files"
  type        = string
  default     = "./site"
}

variable "custom_domain" {
  description = "Custom domain for the site (optional)"
  type        = string
  default     = ""
}

variable "netlify_token" {
  description = "Netlify Personal Access Token (sensitive)"
  type        = string
  sensitive   = true
  default     = ""
  
  validation {
    condition     = length(var.netlify_token) == 0 || length(var.netlify_token) >= 40
    error_message = "Netlify token must be at least 40 characters long if provided."
  }
}

