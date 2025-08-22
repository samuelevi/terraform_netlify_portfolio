output "site_url" {
  description = "The live URL's link to the Netlify hosted site"
  value       = "https://${var.site_name}.netlify.app"
}

output "site_id" {
  description = "The Netlify site unique locator"
  value       = var.site_name
}
