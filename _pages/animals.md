---
layout: null
permalink: "/animals"
---

{% for image in site.static_files %}{% if image.path contains 'images/animals' %}![{{ image.basename | split: "-" | join | capitalize }}]({{ site.baseurl }}/assets/images/animals/{{ image.name }}){% endif %}{% endfor %}
