with open('/Users/davydsadovskyy/react_udemy/portfolio2/flask_shit/macro.txt', 'r') as f:
    lines = f.readlines()
    macro = ''.join(lines)
print(f"#####{macro}#####")