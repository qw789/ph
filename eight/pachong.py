import re
import jieba
import matplotlib.pyplot as plt
from wordcloud import WordCloud

chat_log_file = "deno.txt"
qq_number = "860059263"
exclusion = ["表情", "图片",'成员','不是','就是']

def exclude_word(wordlist):
    for wl in wordlist:
        jieba.del_word(wl)

with open(chat_log_file, "r", encoding="utf-8") as in_file:
    content = "".join(in_file.readlines())
personal_record = "".join(re.findall(f"""(?<={qq_number}\)\n)(.*?)(?=\n\n)""", content))

exclude_word(exclusion)
wordlist_jieba = jieba.cut(personal_record, cut_all=True)
wl_space_split = " ".join(wordlist_jieba)
wc = WordCloud(font_path="simsun.ttc", width=600,
               height=600, background_color="white",
               scale=1.25, min_font_size=12)
my_wordcloud = wc.generate(wl_space_split)

plt.figure(figsize=(7, 7))
plt.imshow(my_wordcloud)
plt.axis("off")
plt.show()
# plt.savefig('test.png')
