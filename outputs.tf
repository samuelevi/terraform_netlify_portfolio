output "random_suffix" {
  description = "The random suffix added to the site name for uniqueness"
  value       = random_id.site_suffix.hex
}
