json.extract! site, :id, :subdomain, :name, :created_at, :updated_at
json.url site_url(site, format: :json)
