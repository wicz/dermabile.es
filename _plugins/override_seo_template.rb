module Jekyll
  class SeoTag < Liquid::Tag
    private

    def self.template_path
      "_layouts/seo_template.html"
    end
  end
end
