# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = 'last 2 versions'
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings
# https://middlemanapp.com/basics/build-and-deploy/

config[:site_name] = 'Cookoon'
config[:title] = 'Un réseau de confiance pour organiser ses événements'
config[:description] = 'Un réseau de confiance, pour organiser des événements du quotidien, et rentabiliser son appartement pendant ses absences'
config[:twitter] = '@cookoon'

configure :development do
  config[:host] = 'http://localhost:3000'
end

configure :build do
  config[:host] = 'https://www.cookoon.fr'

  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
<<<<<<< HEAD
=======

>>>>>>> f7f4869544235f94e92441277c73f40a96115d21
  activate :relative_assets
  set :relative_links, true
end

# middleman-deploy
# https://github.com/middleman-contrib/middleman-deploy

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
  deploy.branch = 'master'
end
