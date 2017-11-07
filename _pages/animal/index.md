---
layout: null
permalink: "/animal/"
title: "Animals"
---

{%- for image in site.static_files -%}
    {%- if image.path contains 'images/animals' -%}
        [![{{ image.basename | split: "-" | join | capitalize }}]({{ site.baseurl }}/assets/images/animals/{{ image.name }})]({{ site.baseurl }}/animal/{{ image.basename }}/)
    {% endif %}
{%- endfor -%}
