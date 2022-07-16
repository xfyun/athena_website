"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[5014],{421:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"yolov7","metadata":{"permalink":"/athena_website/en/blog/yolov7","editUrl":"https://github.com/xfyun/athena_website/tree/master/blog/demo-yolov7.md","source":"@site/blog/demo-yolov7.md","title":"\u5feb\u901f\u5728AthenaServing\u6846\u67b6\u4e2d\u90e8\u7f72YoLoV7","description":"\u80cc\u666f","date":"2022-07-16T01:16:13.000Z","formattedDate":"July 16, 2022","tags":[{"label":"python","permalink":"/athena_website/en/blog/tags/python"},{"label":"yolov7","permalink":"/athena_website/en/blog/tags/yolov-7"}],"readingTime":0.45,"hasTruncateMarker":false,"authors":[{"name":"sea-wyq","title":"Opensource AI Engineer","url":"https://github.com/sea-wyq","imageURL":"https://avatars.githubusercontent.com/u/22475606?v=4","key":"sea-wyq"}],"frontMatter":{"slug":"yolov7","title":"\u5feb\u901f\u5728AthenaServing\u6846\u67b6\u4e2d\u90e8\u7f72YoLoV7","authors":"sea-wyq","tags":["python","yolov7"]},"nextItem":{"title":"\u96c6\u6210\u4e09\u65b9API\u5b9e\u73b0Python\u52a0\u8f7d\u5668\u63d2\u4ef6","permalink":"/athena_website/en/blog/music/api"}},"content":"## \u80cc\u666f\\n>YOLOv7 \u5728 5 FPS \u5230 160 FPS \u8303\u56f4\u5185\uff0c\u901f\u5ea6\u548c\u7cbe\u5ea6\u90fd\u8d85\u8fc7\u4e86\u6240\u6709\u5df2\u77e5\u7684\u76ee\u6807\u68c0\u6d4b\u5668\uff0c\u5e76\u5728 GPU V100 \u4e0a\uff0c30 FPS \u7684\u60c5\u51b5\u4e0b\u8fbe\u5230\u5b9e\u65f6\u76ee\u6807\u68c0\u6d4b\u5668\u7684\u6700\u9ad8\u7cbe\u5ea6 56.8% AP\u3002YOLOv7 \u662f\u5728 MS COCO \u6570\u636e\u96c6\u4e0a\u4ece\u5934\u5f00\u59cb\u8bad\u7ec3\u7684\uff0c\u4e0d\u4f7f\u7528\u4efb\u4f55\u5176\u4ed6\u6570\u636e\u96c6\u6216\u9884\u8bad\u7ec3\u6743\u91cd\u3002"},{"id":"music/api","metadata":{"permalink":"/athena_website/en/blog/music/api","editUrl":"https://github.com/xfyun/athena_website/tree/master/blog/wrapper-third-api.md","source":"@site/blog/wrapper-third-api.md","title":"\u96c6\u6210\u4e09\u65b9API\u5b9e\u73b0Python\u52a0\u8f7d\u5668\u63d2\u4ef6","description":"\u80fd\u529b","date":"2022-07-16T01:16:13.000Z","formattedDate":"July 16, 2022","tags":[{"label":"python","permalink":"/athena_website/en/blog/tags/python"},{"label":"Python\u52a0\u8f7d\u5668\u63d2\u4ef6","permalink":"/athena_website/en/blog/tags/python\u52a0\u8f7d\u5668\u63d2\u4ef6"}],"readingTime":5.855,"hasTruncateMarker":false,"authors":[{"name":"jhr","title":"Junior Engineer","url":"https://github.com/robbinlol","imageURL":"https://avatars.githubusercontent.com/u/10591513?v=4","key":"jhr"}],"frontMatter":{"slug":"music/api","title":"\u96c6\u6210\u4e09\u65b9API\u5b9e\u73b0Python\u52a0\u8f7d\u5668\u63d2\u4ef6","authors":"jhr","tags":["python","Python\u52a0\u8f7d\u5668\u63d2\u4ef6"]},"prevItem":{"title":"\u5feb\u901f\u5728AthenaServing\u6846\u67b6\u4e2d\u90e8\u7f72YoLoV7","permalink":"/athena_website/en/blog/yolov7"},"nextItem":{"title":"\u5feb\u901f\u90e8\u7f72AthenaServing\u6846\u67b6 (Sealos 4.x)","permalink":"/athena_website/en/blog/sealos4-athenaserving"}},"content":"### \u80fd\u529b\\nAI\u80fd\u529b\u662f\u6307\u5df2\u5b8c\u6210\u4e91\u670d\u52a1\u5316\u7684AI\u5f15\u64ce\u3002\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u80fd\u529b\u7684\u4f7f\u7528\u8005\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7API\u548c\u751f\u6210\u7684\u63a5\u53e3\u6587\u6863\u8fdb\u884c\u96c6\u6210\u53ca\u8c03\u7528\u3002\u5177\u4f53\u5b9a\u4e49\u53ef\u4ee5\u53c2\u8003[ASE\u5f15\u64ce\u540d\u8bcd\u89e3\u91ca](https://www.iflyaicloud.com/aipaas-doc/docs/01-%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D/02-%E5%90%8D%E8%AF%8D%E8%A7%A3%E9%87%8A.html)\\n### \u52a0\u8f7d\u5668\u63d2\u4ef6\\n\u80fd\u529b\u662f\u901a\u8fc7\u52a0\u8f7d\u5668\u63d2\u4ef6\u6765\u8c03\u7528\u3002\u8c03\u7528\u7684\u80fd\u529b\u4e0d\u4ec5\u5305\u542bAI\u80fd\u529b\u7684\u4f7f\u7528\uff0c\u666e\u901a\u7f51\u7edc\u8bf7\u6c42\u7684\u8c03\u7528\u540c\u6837\u9002\u7528\u3002\\n\\n\u5bf9\u4e8e\u975e\u6d41\u5f0f\u7684\u7f51\u7edc\u8bf7\u6c42\u2014\u2014HTTP\u8bf7\u6c42\u2014\u2014\u6765\u8bf4\uff0c\u63d2\u4ef6\u7684\u4e3b\u4f53\u5305\u62ec\u56db\u6b65\uff1b\u52a0\u8f7d\u5668\u7684\u521d\u59cb\u5316\uff1b\u52a0\u8f7d\u5668\u7684\u5b8c\u6210\uff1b\u52a0\u8f7d\u5668\u7684\u6267\u884c\uff1b\u52a0\u8f7d\u5668\u7684\u9519\u8bef\u5904\u7406\u3002\u5206\u522b\u5bf9\u5e94\u4e86\u56db\u4e2a\u6267\u884c\u51fd\u6570`wrapperInit`\uff1b`wrapperFini`\uff1b`wrapperOnceExec`\uff1b`wrapperError`\u3002\\n\\n\u901a\u5e38\u52a0\u8f7d\u5668\u63d2\u4ef6\u5b9e\u73b0\u91c7\u7528\u4e86C++\u8bed\u8a00\uff0c\u5bf9\u4e8e\u719f\u8c19C++\u8bed\u8a00\u7684\u7528\u6237\u6765\u8bf4\u6beb\u65e0\u538b\u529b\uff0c\u5f53\u4e86\u89e3\u52a0\u8f7d\u5668\u63d2\u4ef6\u7684\u8fd0\u884c\u6d41\u7a0b\u3001\u6570\u636e\u8f93\u5165\u548c\u8f93\u51fa\u65b9\u5f0f\u540e\uff0c\u5c31\u53ef\u4ee5\u5b9e\u73b0\u81ea\u5df1\u7684\u52a0\u8f7d\u5668\u63d2\u4ef6\uff0c\u968f\u5373\u901a\u8fc7\u7f16\u8bd1\u6210**\u52a8\u6001\u5e93\u6587\u4ef6**\u540e\u53ef\u8c03\u7528\u3002\\n\\nPython\u662f\u4e00\u79cd\u5f31\u7c7b\u578b\u8bed\u97f3\uff0c\u76f8\u6bd4\u4e8eC++\uff0cPython\u66f4\u5c0f\u5de7\u7cbe\u608d\uff0c\u7528\u6237\u4e5f\u80fd\u591f\u66f4\u5bb9\u6613\u4e0a\u624b\u6784\u5efa\u52a0\u8f7d\u5668\u63d2\u4ef6\u3002\\n\\n**\u672c\u4f8b\u4e3b\u8981\u4ecb\u7ecd\u4e86\u4e00\u4e2a\u8c03\u7528[\u4e09\u65b9\u97f3\u4e50\u8bc6\u522bAPI](https://docs.acrcloud.cn/api-reference/identification-api)\u7684Python\u52a0\u8f7d\u5668\u63d2\u4ef6\u5b9e\u73b0\u6b65\u9aa4\u3002\u8c03\u7528\u97f3\u4e50\u8bc6\u522bAPI\u65f6\u7528\u6237\u4f1a\u53d1\u9001\u5f85\u8bc6\u522b\u97f3\u4e50\u7684\u4e8c\u8fdb\u5236\u6d41\u6570\u636e\uff0c\u97f3\u4e50\u683c\u5f0f\u652f\u6301mp3\u3001wav\u3001wma\u3001amr\u3001ogg\u3001ape\u3001acc\u3001spx\u3001m4a\u3001mp4\u3001FLAC\u7b49\uff0c\u8fd4\u56de\u7684\u8bc6\u522b\u7ed3\u679c\u662fJSON\u5bf9\u8c61\u3002**\\n\\n### \u5b9e\u73b0\u52a0\u8f7d\u5668\u63d2\u4ef6\\n\u52a0\u8f7d\u5668\u63d2\u4ef6\u521d\u59cb\u5316\u51fd\u6570`wrapperInit`\u7528\u4e8e\u521d\u59cb\u5316\u52a0\u8f7d\u5668\u6267\u884c\u8fc7\u7a0b\u4e2d\u7528\u5230\u7684\u53d8\u91cf\uff0c\u8fd9\u4e9b\u53c2\u6570\u4ece\u914d\u7f6e\u6587\u4ef6`config`\u4e2d\u8bfb\u5165\uff0c\u5176\u4e2d**requrl**\u662f\u53d1\u9001\u8bf7\u6c42\u7684\u5730\u5740\u3002\\n```python\\nglobal requrl, http_method, http_uri\\nglobal access_key_music, access_secret_music, access_key_humming, access_secret_humming\\n\\nrequrl, http_method, http_uri = config[\'requrl\'], config[\'http_method\'], config[\'http_uri\']\\naccess_key_music, access_secret_music = config[\'access_key_music\'], config[\'access_secret_music\']\\naccess_key_humming, access_secret_humming = config[\'access_key_humming\'], config[\'access_secret_humming\']\\n```\\n\\n\u52a0\u8f7d\u5668\u63d2\u4ef6\u6267\u884c\u51fd\u6570`wrapperOnceExec`\u7684\u6267\u884c\u4e3b\u8981\u662f**\u9274\u6743**\u548c**\u53d1\u9001HTTP\u8bf7\u6c42**\u3002\\n\\n\u9274\u6743\u7684\u7b7e\u540d\u662f\u901a\u8fc7`http_method`\u3001`http_uri`\u3001`access_key`\u3001`data_type`\u3001`signature_version`\u4ee5\u53ca`\u65f6\u95f4\u6233`\u7b49\u6765\u6784\u5efa\uff0c\u6784\u5efa\u8fc7\u7a0b\u5982\u4e0b\uff1a\\n```python\\nsignature_version, data_type = \'1\', \'audio\'\\n\\ntimestamp = time.time()\\n\\nstring_to_sign = http_method + \'\\\\n\' \\\\\\n                + http_uri + \'\\\\n\' \\\\\\n                + access_key + \'\\\\n\' \\\\\\n                + data_type + \'\\\\n\' \\\\\\n                + signature_version + \'\\\\n\' \\\\\\n                + str(timestamp)\\nsign = base64.b64encode(hmac.new(access_secret.encode(\'ascii\'), string_to_sign.encode(\'ascii\'),\\n                                digestmod=hashlib.sha1).digest()).decode(\'ascii\')\\n\\nif sign is None:\\n    logging.error(\'HMAC failure.\')\\n    return 5014\\n```\\nHTTP\u8bf7\u6c42\u4f53\u53ef\u4ee5\u770b\u4f5c\u4e00\u4e2a\u5b57\u5178\uff0c\u5305\u62ec\u4e86`\u8bf7\u6c42\u6570\u636e`\u3001`access_key`\u3001`\u6570\u636e\u7684\u957f\u5ea6`\u3001`\u65f6\u95f4\u6233`\u3001`\u7b7e\u540d`\u3001`data_type`\u548c`signature_version`\u7b49\u3002\\n\\n\u6784\u5efa\u7684HTTP\u8bf7\u6c42\u4f53\u5982\u4e0b\uff1a\\n```python\\nfiles = {\'sample\': src}\\ndata = {\\n    \'access_key\': access_key,\\n    \'sample_bytes\': sample_bytes,\\n    \'timestamp\': str(timestamp),\\n    \'signature\': sign,\\n    \'data_type\': data_type,\\n    \'signature_version\': signature_version\\n}\\nr = requests.post(requrl, files=files, data=data, timeout=5)\\n```\\n\\n\u5728\u6267\u884c\u7684\u8fc7\u7a0b\u4e2d\uff0c\u9519\u8bef\u9700\u8981**\u5c3d\u53ef\u80fd\u65e9**\u6355\u83b7\uff0c\u9519\u8bef\u7801\u4e5f\u8981\u548c\u7b2c\u4e09\u65b9\u5e73\u53f0\u533a\u522b\u5f00\u6765\uff0c\u5373\u4f7f\u662f\u9ed8\u8ba4\u7684HTTP\u9519\u8bef\u7801\u4e5f\u8981\u6709\u8fa8\u522b\u4e5f\u597d\uff0c\u65b9\u4fbf\u5b9a\u4f4d\u9519\u8bef\u3002\\n```python\\ntry:\\n    r = requests.post(requrl, files=files, data=data, timeout=5)\\nexcept requests.exceptions.ConnectTimeout:\\n    logging.error(\'Http post timeout.\')\\n    return 4408# http timeout\\n\\nif r is None:\\n    logging.error(\\"HTTP\u5185\u5bb9\u975e\u6cd5\\")\\n    return 4003\\nif r.status_code != 200:\\n    return 4000 + r.status_code\\n```\\n\\n\u54cd\u5e94\u6570\u636e\u4e3aJSON\u683c\u5f0f\uff0c\u6709\u4e09\u4e2a\u5b57\u6bb5\uff1a\\n```json\\n{\\n\\"cost_time\\":...\\n\\"status\\":...\\n\\"metadata\\":...\\n}\\n```\\n\\n\u5176\u4e2d`status`\u5b57\u6bb5\u4e2d\u7684`code`\u4ee3\u8868\u4e86\u54cd\u5e94\u7684\u72b6\u6001\uff0c\u4e3a0\u8868\u793a\u8bf7\u6c42\u6210\u529f\uff0c\u5426\u5219\u5931\u8d25\u3002\u6240\u4ee5\u5e94\u8be5\u5224\u65ad`code`\u7684\u53d6\u503c\uff0c\u5f53\u4e0d\u4e3a\u96f6\u65f6\u5219\u63d0\u524d\u8fd4\u56de`code`\u8868\u793a\u7684\u9519\u8bef\u7801\\n\\n```python\\npattern = re.compile(\'\\"code\\":\\\\d+\')\\nerror_code = re.findall(pattern, r.text)\\nerror_code = error_code[0].split(\':\')[-1]\\nif int(error_code):\\n    return int(error_code)\\n```\\n\\n\u54cd\u5e94\u6210\u529f\u5219\u8fd4\u56de\u4e00\u4e2a\u9884\u5148\u5b9a\u4e49\u597d\u7684\u5b57\u5178\u8868\u793a\uff1a\\n\\n```python\\nr.encoding = \'utf-8\'\\n\\nrespData.append({\\n    \'key\': \'output_text\',\\n    \'type\': 0,\\n    \'status\': 3,\\n    \\"data\\": r.text,\\n    \\"len\\": len(r.text.encode())\\n})\\n```\\n\\n\u52a0\u8f7d\u5668\u63d2\u4ef6\u9519\u8bef\u5904\u7406\u51fd\u6570`wrapperError`\u5c06\u4f1a\u8fd4\u56de\u9519\u8bef\u7801\u4ee3\u8868\u7684\u542b\u4e49\uff0c\u5728\u672c\u4f8b\u4e2d\u5982\u4e0b\\n```python\\nif ret == 1001:\\n    return \\"\u8bc6\u522b\u65e0\u7ed3\u679c\\"\\nelif ret == 2000:\\n    return \\"\u5f55\u97f3\u5931\u8d25\uff0c\u53ef\u80fd\u662f\u8bbe\u5907\u6743\u9650\u95ee\u9898\\"\\nelif ret == 2001:\\n    return \\"\u521d\u59cb\u5316\u9519\u8bef\u6216\u8005\u521d\u59cb\u5316\u8d85\u65f6\\"\\nelif ret == 2002:\\n    return \\"\u5904\u7406metadata\u9519\u8bef\\"\\nelif ret == 2004:\\n    return \\"\u65e0\u6cd5\u751f\u6210\u6307\u7eb9\uff08\u6709\u53ef\u80fd\u662f\u9759\u97f3\uff09\\"\\nelif ret == 2005:\\n    return \\"\u8d85\u65f6\\"\\nelif ret == 3000:\\n    return \\"\u670d\u52a1\u7aef\u9519\u8bef\\"\\nelif ret == 3001:\\n    return \\"Access Key\u4e0d\u5b58\u5728\u6216\u9519\u8bef\\"\\nelif ret == 3002:\\n    return \\"HTTP\u5185\u5bb9\u975e\u6cd5\\"\\nelif ret == 3003:\\n    return \\"\u8bf7\u6c42\u6570\u8d85\u51fa\u9650\u5236\uff08\u9700\u8981\u5347\u7ea7\u8d26\u53f7\uff09\\"\\nelif ret == 3006:\\n    return \\"\u53c2\u6570\u975e\u6cd5\\"\\nelif ret == 3014:\\n    return \\"\u7b7e\u540d\u975e\u6cd5\\"\\nelif ret == 3015:\\n    return \\"QPS\u8d85\u51fa\u9650\u5236\uff08\u9700\u8981\u5347\u7ea7\u8d26\u53f7\uff09\\"\\nelse:\\n    return f\\"User Defined Error: {ret}\\"\\n```\\n\\n\u52a0\u8f7d\u5668\u63d2\u4ef6\u5b8c\u6210\u51fd\u6570`wrapperFini`\u7528\u4e8e\u5904\u7406\u4e00\u4e9b\u52a0\u8f7d\u5668\u7684\u6536\u5c3e\u5de5\u4f5c\uff0c\u5728C++\u8bed\u8a00\u4e2d\u91cc\u9762\u4f1a\u6267\u884c\u4e00\u4e9b\u5806\u533a\u548c\u6307\u9488\u7684\u91ca\u653e\uff0c\u5bf9\u4e8ePython\u8bed\u8a00\uff0c\u901a\u5e38\u4e0d\u9700\u8981\u5b9e\u73b0\uff1a\\n```python\\ndef wrapperFini() -> int:\\n    logging.info(\'Wrapper finished.\')\\n    return 0\\n```\\n**\u4ee5\u4e0a\u5c31\u662f\u4e00\u4e2a\u8c03\u7528\u4e09\u65b9API\u7684Python\u52a0\u8f7d\u5668\u5b9e\u73b0\u7684\u7b80\u5355\u4ecb\u7ecd**\\n\\n\u5177\u4f53\u4ee3\u7801\u53ef\u4ee5\u53c2\u8003[\u96c6\u6210\u4e09\u65b9API\u5b9e\u73b0Python\u52a0\u8f7d\u5668\u63d2\u4ef6](https://github.com/xfyun/aiges/tree/master/demo)"},{"id":"sealos4-athenaserving","metadata":{"permalink":"/athena_website/en/blog/sealos4-athenaserving","editUrl":"https://github.com/xfyun/athena_website/tree/master/blog/2022-07-15-sealos4.md","source":"@site/blog/2022-07-15-sealos4.md","title":"\u5feb\u901f\u90e8\u7f72AthenaServing\u6846\u67b6 (Sealos 4.x)","description":"\u51c6\u5907\u4e00\u53f0\u6d4b\u8bd5\u673a(4c8G),\u786c\u76d8>=20G\u5373\u53ef","date":"2022-07-15T00:00:00.000Z","formattedDate":"July 15, 2022","tags":[{"label":"sealos","permalink":"/athena_website/en/blog/tags/sealos"},{"label":"ai","permalink":"/athena_website/en/blog/tags/ai"},{"label":"sealos4","permalink":"/athena_website/en/blog/tags/sealos-4"},{"label":"athenaserving","permalink":"/athena_website/en/blog/tags/athenaserving"}],"readingTime":0.405,"hasTruncateMarker":false,"authors":[{"name":"ybyang7","title":"Opensource AI Engineer","url":"https://github.com/berlinsaint","imageURL":"https://avatars.githubusercontent.com/u/10629930?v=4","key":"ybyang7"}],"frontMatter":{"slug":"sealos4-athenaserving","title":"\u5feb\u901f\u90e8\u7f72AthenaServing\u6846\u67b6 (Sealos 4.x)","authors":["ybyang7"],"tags":["sealos","ai","sealos4","athenaserving"]},"prevItem":{"title":"\u96c6\u6210\u4e09\u65b9API\u5b9e\u73b0Python\u52a0\u8f7d\u5668\u63d2\u4ef6","permalink":"/athena_website/en/blog/music/api"},"nextItem":{"title":"\u5feb\u901f\u521b\u5efak8s\u96c6\u7fa4(sealos3 on aws)","permalink":"/athena_website/en/blog/aws-sealos-3"}},"content":"\u51c6\u5907\u4e00\u53f0\u6d4b\u8bd5\u673a(4c8G),\u786c\u76d8>=20G\u5373\u53ef\\n\\n\\n## \u5b89\u88c5\\n\\n1. \u5b89\u88c5sealos.4.0\\n\\n``` wget -c https://sealyun-home.oss-cn-beijing.aliyuncs.com/sealos-4.0/latest/sealos-amd64 -O sealos &&  chmod +x sealos && mv sealos /usr/bin```\\n\\n  \\n\\n2. \u521b\u5efa\u96c6\u7fa4\\n\\n* ```sealos run labring/kubernetes:v1.19.16 labring/calico:v3.22.1   --masters 192.168.64.2 -p <password>```\\n\\n![img](imgs/sealos4-run-k8s.png)\\n![img2](imgs/sealos4-run-k8s-2.png)\\n![img2](imgs/sealos4-run-k8s-3.png)\\n\\n* ```sealos run labring/helm:v3.8.2 # install helm```\\n* ```sealos run labring/openebs:v1.9.0 # install openebs```\\n* ```sealos run labring/athena_serving:v2.0.0rc1```\\n* ```sealos run labring/demo_mmocr:v3.1```\\n\\n3. \u8c03\u7528AI demo\u80fd\u529b MMOCR\u80fd\u529b"},{"id":"aws-sealos-3","metadata":{"permalink":"/athena_website/en/blog/aws-sealos-3","editUrl":"https://github.com/xfyun/athena_website/tree/master/blog/2022-07-14-sealos-aws.md","source":"@site/blog/2022-07-14-sealos-aws.md","title":"\u5feb\u901f\u521b\u5efak8s\u96c6\u7fa4(sealos3 on aws)","description":"1. \u5728aws\u4e0a\u7533\u8bf7\u670d\u52a1\u5668\u8d44\u6e90","date":"2022-07-14T00:00:00.000Z","formattedDate":"July 14, 2022","tags":[{"label":"sealos","permalink":"/athena_website/en/blog/tags/sealos"},{"label":"aws","permalink":"/athena_website/en/blog/tags/aws"}],"readingTime":1.55,"hasTruncateMarker":false,"authors":[{"name":"sea-wyq","title":"Opensource AI Engineer","url":"https://github.com/sea-wyq","imageURL":"https://avatars.githubusercontent.com/u/22475606?v=4","key":"sea-wyq"}],"frontMatter":{"slug":"aws-sealos-3","title":"\u5feb\u901f\u521b\u5efak8s\u96c6\u7fa4(sealos3 on aws)","authors":"sea-wyq","tags":["sealos","aws"]},"prevItem":{"title":"\u5feb\u901f\u90e8\u7f72AthenaServing\u6846\u67b6 (Sealos 4.x)","permalink":"/athena_website/en/blog/sealos4-athenaserving"},"nextItem":{"title":"Welcome","permalink":"/athena_website/en/blog/welcome"}},"content":"## 1. \u5728aws\u4e0a\u7533\u8bf7\u670d\u52a1\u5668\u8d44\u6e90\\n\\n![img](aws.png)\\n\\n## 2. \u4f7f\u7528sealos\u90e8\u7f72k8s\u96c6\u7fa4\\n\\n#### 2.1. \u5173\u95ed\u9632\u706b\u5899\u548cselinux :All\\n\\n```\\nsystemctl stop firewalld \\nsystemctl disable firewalld \\nsetenforce 0\\n```\\n\\n#### 2.2 \u521b\u5efa\u865a\u62df\u673a\u4e4b\u540e\uff0c\u914d\u7f6e\u4e3b\u673a\u540d\uff0c\u914d\u7f6e\u5185\u7f51\u89e3\u6790:All\\n\\n```\\nhostnamectl set-hostname master \\nhostnamectl set-hostname node1\\n```\\n\\n#### 2.3.\u914d\u7f6ehosts\u6587\u4ef6:Master\\n\\n```\\n# \u8282\u70b9ip\u901a\u8fc7\u5404\u8282\u70b9ipconfig\u83b7\u53d6\\ncat <<EOF >> /etc/hosts  \\n172.31.1.36 master  \\n172.31.11.161 node1   \\nEOF\\n```\\n\\n#### 2.4.\u914d\u7f6emaster\u514d\u5bc6\u767b\u5f55\u5404\u8282\u70b9\uff1aMaster\\n\\n```\\nssh-keygen\\nssh-copy-id root@master \\nssh-copy-id root@node1 \\n```\\n\\n#### 2.5. \u4e0b\u8f7d\u5e76\u5b89\u88c5sealos-3.9\u5e76\u90e8\u7f72\u4e00\u4e2a\u4e00\u4e3b\u4e00\u4ece\u7684k8s\u96c6\u7fa4\\n\\n```\\n# \u4e0b\u8f7dsealos\\nwget -c https://sealyun-home.oss-cn-beijing.aliyuncs.com/sealos/latest/sealos && \\n    chmod +x sealos && mv sealos /usr/bin\\n\\n# \u4e0b\u8f7dkubelete-1.22\u7248\u672c\u79bb\u7ebf\u8d44\u6e90\u5305\\nwget -c https://sealyun.oss-cn-beijing.aliyuncs.com/05a3db657821277f5f3b92d834bbaf98-v1.22.0/kube1.22.0.tar.gz\\n\\n# \u90e8\u7f72k8s\u96c6\u7fa4\\nsealos init \\\\\\n--passwd 123456 \\\\\\n--master 172.31.1.36 \\\\\\n--node 172.31.11.161 \\\\\\n--pkg-url /home/ubuntu/kube1.22.0.tar.gz \\\\\\n--version v1.22.0\\n```\\n\\n#### 2.6. \u5b89\u88ddhelm\\n- Download your desired version (wget  https://get.helm.sh/helm-v3.9.0-linux-amd64.tar.gz)\\n- Unpack it (tar -zxvf helm-v3.9.0-linux-amd64.tar.gz)\\n- Find the helm binary in the unpacked directory, and move it to its desireddestination (mv linux-amd64/helm /usr/local/bin/helm)\\n\\n#### 2.7 helm\u5b89\u88c5\u672c\u5730\u6301\u4e45\u5316\u5b58\u50a8openebs\u670d\u52a1\\n\\n```\\nhelm add repo openebs https://openebs.github.io/charts\\nhelm pull openebs/openebs\\n\\n# \u4fee\u6539\u670d\u52a1\u5bf9\u5e94\u7684storageclass\u5373\u53ef\\n#\u9ed8\u8ba4\u6301\u4e45\u5316\u6570\u636e\u5730\u5740\uff1a/var/openebs/local\\n\\n# \u5b89\u88c5openebs\\nhelm install ebs openebs\\n```\\n\\n#### 2.8. \u901a\u8fc7helm\u5b89\u88c5athena\u670d\u52a1\\n\\n```\\nhttps://github.com/sea-wyq/Athena_deploy.git\\ncd Athena_deploy/chart/\\nhelm install athena athenaserving\\n```\\n\\n\u670d\u52a1\u96c6\u7fa4\u642d\u5efa\u6210\u529f\u3002\u3002\u3002"},{"id":"welcome","metadata":{"permalink":"/athena_website/en/blog/welcome","editUrl":"https://github.com/xfyun/athena_website/tree/master/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Welcome to contribute AthenaServing Docs and Blogs.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"opensource","permalink":"/athena_website/en/blog/tags/opensource"},{"label":"athenaserving","permalink":"/athena_website/en/blog/tags/athenaserving"}],"readingTime":0.035,"hasTruncateMarker":false,"authors":[{"name":"ybyang7","title":"Opensource AI Engineer","url":"https://github.com/berlinsaint","imageURL":"https://avatars.githubusercontent.com/u/10629930?v=4","key":"ybyang7"},{"name":"sea-wyq","title":"Opensource AI Engineer","url":"https://github.com/sea-wyq","imageURL":"https://avatars.githubusercontent.com/u/22475606?v=4","key":"sea-wyq"},{"name":"jhr","title":"Junior Engineer","url":"https://github.com/robbinlol","imageURL":"https://avatars.githubusercontent.com/u/10591513?v=4","key":"jhr"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["ybyang7","sea-wyq","jhr"],"tags":["opensource","athenaserving"]},"prevItem":{"title":"\u5feb\u901f\u521b\u5efak8s\u96c6\u7fa4(sealos3 on aws)","permalink":"/athena_website/en/blog/aws-sealos-3"},"nextItem":{"title":"First Blog Post","permalink":"/athena_website/en/blog/first-blog-post"}},"content":"Welcome to contribute AthenaServing Docs and Blogs."},{"id":"first-blog-post","metadata":{"permalink":"/athena_website/en/blog/first-blog-post","editUrl":"https://github.com/xfyun/athena_website/tree/master/blog/2019-05-28-first-blog-post.md","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet \u3002","date":"2019-05-28T00:00:00.000Z","formattedDate":"May 28, 2019","tags":[{"label":"hola","permalink":"/athena_website/en/blog/tags/hola"},{"label":"docusaurus","permalink":"/athena_website/en/blog/tags/docusaurus"}],"readingTime":0.125,"hasTruncateMarker":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"prevItem":{"title":"Welcome","permalink":"/athena_website/en/blog/welcome"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet \u3002"}]}')}}]);