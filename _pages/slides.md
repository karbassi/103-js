---
layout: default
permalink: /slides
---

{% for slide in site.slides %}
	<section {% if slide.slide-id %}id="{{slide.slide-id}}"{% else %}id="{{ slide.id | slice: 12, 999 | trim }}"{%endif %} class="step{% if slide.classes.size %}{% for class in slide.classes %} {{class}}{% endfor %}{% else %} slide{% endif %}" {% unless site.simple-slideshow %}{% for attr in slide.data %} data-{{attr[0]}}="{{attr[1]}}"{% endfor %}{% endunless %}>
		{% if slide.title != "" %}<h1>{{ slide.title }}</h1>{% endif %}
		{{ slide.content }}
	</section>
	<div class="page-break"></div>
{% endfor %}

{% unless site.simple-slideshow %}
{% if site.overview %}
<section id="overview" class="step" {% for attr in site.overview-data %} data-{{attr[0]}}="{{attr[1]}}"{% endfor %}></section>
{% endif %}
{% endunless %}
