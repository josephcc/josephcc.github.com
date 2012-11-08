# Tag Cloud for Octopress, modified by pf_miles, for use with utf-8 encoded blogs(all regexp added 'u' option).
# modified by alswl, tag_cloud -> category_cloud
# =======================
# 
# Description:
# ------------
# Easy output tag cloud and category list.
# 
# Syntax:
# -------
#     {% category_flash_cloud %}
# 
# Example:
# --------
# In some template files, you can add the following markups.
# 
# ### source/_includes/custom/asides/tag_cloud.html ###
# 
#     <section>
#       <h1>Tag Cloud</h1>
#         <span id="tag-cloud">{% tag_cloud %}</span>
#     </section>
# 
# ### source/_includes/custom/asides/category_list.html ###
# 
#     <section>
#       <h1>Categories</h1>
#         <ul id="category-list">{% category_list counter:true %}</ul>
#     </section>
# 
# Notes:
# ------
# Be sure to insert above template files into `default_asides` array in `_config.yml`.
# And also you can define styles for 'tag-cloud' or 'category-list' in a `.scss` file.
# (ex: `sass/custom/_styles.scss`)
# 
# Licence:
# --------
# Distributed under the [MIT License][MIT].
# 
# [MIT]: http://www.opensource.org/licenses/mit-license.php
# 


module Jekyll

  class CategoryFlashCloud < Liquid::Tag

    def initialize(tag_name, markup, tokens)
      @opts = {}
      @opts['bgcolor'] = '#ffffff'
      if markup.strip =~ /\s*bgcolor:(#[0-9a-fA-F]+)/iu
        @opts['bgcolor'] = $1
        markup = markup.strip.sub(/bgcolor:\w+/iu,'')
      end
      super
    end

    def render(context)
      lists = {}
      max, min = 1, 1
      config = context.registers[:site].config
      category_dir = config['url'] + config['root'] + config['category_dir'] + '/'
      categories = context.registers[:site].categories
      categories.keys.sort_by{ |str| str.downcase }.each do |category|
        count = categories[category].count
        lists[category] = count
        max = count if count > max
      end

      bgcolor = @opts['bgcolor']

      html = ''
      html << '<script type="text/javascript" src="javascripts/swfobject.js"></script>'
      html << "<embed type='application/x-shockwave-flash' src='/javascripts/tagcloud.swf' width='100%' height='250' bgcolor='#{bgcolor}' id='tagcloudflash' name='tagcloudflash' quality='high' allowscriptaccess='always'"

      html << 'flashvars="tcolor=0x333333&amp;tcolor2=0x333333&amp;hicolor=0x000000&amp;tspeed=100&amp;distr=true&amp;mode=tags&amp;'
      html << 'tagcloud='

      tagcloud = ''
      tagcloud << '<tags>'


      lists.each do | category, counter |
        url = category_dir + category.gsub(/_|\P{Word}/u, '-').gsub(/-{2,}/u, '-').downcase
        style = "font-size: #{10 + (40 * Float(counter)/max)}%"

        tagcloud << "<a href='#{url}' style='#{style}'>#{category}"
        tagcloud << "</a> "

      end

      tagcloud << '</tags>'

      # tagcloud urlencode
      tagcloud = CGI.escape(tagcloud)
      
      html << tagcloud
      html << '">'
      html
    end
  end
end

Liquid::Template.register_tag('category_flash_cloud', Jekyll::CategoryFlashCloud)
