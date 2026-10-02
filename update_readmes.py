import os
import re

repo_dir = r"d:\work\Career\Projects\web\QamoosTech"
sections = [
    "01-Technical-Engineering",
    "02-Professional-Communication",
    "03-General-English"
]

def count_entries(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    return len(re.findall(r'^###\s+', content, flags=re.MULTILINE))

def generate_table(directory):
    md_files = []
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.md') and file != 'README.md':
                rel_path = os.path.relpath(os.path.join(root, file), directory).replace('\\', '/')
                count = count_entries(os.path.join(root, file))
                # Create a nice readable topic from the path
                topic = rel_path.replace('.md', '').replace('-', ' ').replace('/', ' > ').title()
                md_files.append((rel_path, topic, count))
    
    # Sort files by path/name
    md_files.sort()
    
    table = "| File | Topic | Entries |\n|---|---|---|\n"
    for rel_path, topic, count in md_files:
        table += f"| [{os.path.basename(rel_path)}]({rel_path}) | {topic} | {count} |\n"
    
    return table

for section in sections:
    section_dir = os.path.join(repo_dir, section)
    if not os.path.exists(section_dir):
        continue
        
    readme_path = os.path.join(section_dir, 'README.md')
    if os.path.exists(readme_path):
        with open(readme_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Replace the table (everything after "## Files" or "## Index")
        if "## Files" in content:
            pre_table = content.split("## Files")[0]
            new_content = pre_table + "## Files\n\n" + generate_table(section_dir)
        elif "## Index" in content:
            pre_table = content.split("## Index")[0]
            new_content = pre_table + "## Index\n\n" + generate_table(section_dir)
        else:
            new_content = content + "\n\n## Files\n\n" + generate_table(section_dir)
            
        with open(readme_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {readme_path}")
