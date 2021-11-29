colors = open('_colors.scss', 'r').read().splitlines()

exportFile = open('_export.module.scss', 'w')

template = """@import "./_colors";

:export {{
{}
}}"""

colorsFormatted = []

for color in colors:
	if color:
		color = color.split(':')[0]
		cssname = color
		words = color[1:].split('-')
		for i in range(1, len(words)):
			words[i] = words[i].title()

		jsname = "".join(words)
		colorsFormatted.append(f"\t{jsname}: {cssname};")

exportFile.write(template.format("\n".join(colorsFormatted)))

