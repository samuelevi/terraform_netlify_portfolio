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

variable "netlify_api_token" {
  description = "Netlify API token (secret)"
  type        = string
  sensitive   = true
}

variable "site_name" {
  description = "Netlify site sub-domain"
  type        = string
  default     = "portfolio-hug"  # Change to match your Netlify site
}