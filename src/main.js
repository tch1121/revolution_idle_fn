function main() {
  const app = document.querySelector('#dilation_tree');
  if (!app) {
    console.error('App element not found');
    return;
  }

  const autoRedirectToggle = document.querySelector('#auto-redirect-toggle');

  const tree_config = [
    {
      "text": "DP 1",
      "content": "C1;T0,0,0,0;M0,0,0,0;B0,0,0,0",
    },
    {
      "text": "DP 2",
      "content": "C1;T0,0,0,0;M1,0,0,0;B0,0,0,0",
    },
    {
      "text": "DP 3",
      "content": "C1;T1,1,0,0;M0,0,0,0;B0,0,0,0",
    },
    {
      "text": "DP 4",
      "content": "C1;T1,1,1,0;M0,0,0,0;B0,0,0,0",
    },
    {
      "text": "DP 5 SN 80 AP 10K",
      "content": "C1;T1,1,2,0;M0,0,0,0;B0,0,0,0",
    },
    {
      "text": "DP 5",
      "content": "C1;T0,0,0,0;M0,0,0,0;B1,1,2,0",
    },
    {
      "text": "DP 6",
      "content": "C1;T1,0,0,0;M0,0,0,0;B1,1,2,0",
    },
    {
      "text": "DP 7",
      "content": "C1;T1,1,0,0;M0,0,0,0;B1,1,2,0",
    },
    {
      "text": "DP 8 SN 105",
      "content": "C1;T1,1,5,0;M0,0,0,0;B0,0,0,0",
    },
    {
      "text": "DP 8 AP 25K",
      "content": "C1;T1,1,0,0;M0,0,0,0;B1,1,3,0",
    },
    {
      "text": "DP 9",
      "content": "C1;T1,1,0,0;M0,0,0,0;B1,1,4,0",
    },
    {
      "text": "DP 10",
      "content": "C1;T1,1,0,0;M0,0,0,0;B1,1,5,0",
    },
    {
      "text": "DP 11 AP 30K",
      "content": "C1;T1,1,0,0;M1,0,0,0;B1,1,5,0",
    },
    {
      "text": "DP 12 AP 32K",
      "content": "C1;T1,1,0,0;M2,0,0,0;B1,1,5,0",
    },
    {
      "text": "DP 12",
      "content": "C5;T1,1,0,0;M0,0,0,0;B1,1,3,0",
    },
    {
      "text": "DP 13",
      "content": "C1;T1,1,1,1;M1,1,1,1;B1,1,1,1",
    },
    {
      "text": "DP 13 (5-6 Min)",
      "content": "C1;T0,0,0,0;M1,5,1,5;B0,0,0,0",
    },
    {
      "text": "DP 13",
      "content": "C5;T1,1,0,0;M0,0,0,0;B1,1,4,0",
    },
    {
      "text": "DP 14 AP 38K+",
      "content": "C5;T1,1,1,1;M1,0,0,0;B1,1,1,1",
    },
    {
      "text": "AP 15 AP 44.5K+",
      "content": "C1;T1,1,1,5;M0,0,0,0;B1,5,0,0",
    },
    {
      "text": "DP 15",
      "content": "C5;T1,1,1,1;M1,0,0,0;B1,1,2,1",
    },
    {
      "text": "SN 16 SN 120",
      "content": "C1;T1,1,5,0;M0,0,0,0;B1,1,1,5",
    },
    {
      "text": "DP 16 AP 130K+",
      "content": "C4;T0,0,0,0;M1,1,5,5;B0,0,0,0",
    },
    {
      "text": "DP 17",
      "content": "C5;T0,0,0,0;M1,1,5,5;B0,0,0,0",
    },
    {
      "text": "AP 18 AP 60K+",
      "content": "C1;T1,1,1,5;M0,0,0,0;B4,5,0,0",
    },
    {
      "text": "SN 18 SN 128",
      "content": "C1;T1,1,5,2;M0,0,0,0;B1,1,1,5",
    },
    {
      "text": "DP 18",
      "content": "C5;T0,0,0,0;M2,1,5,5;B0,0,0,0",
    },
    {
      "text": "DP 19",
      "content": "C5;T0,0,0,0;M3,1,5,5;B0,0,0,0",
    },
    {
      "text": "DP 20",
      "content": "C5;T0,0,0,0;M4,1,5,5;B0,0,0,0",
    },
    {
      "text": "DP 21 Buy DU",
      "content": "C5;T0,0,0,0;M5,1,5,5;B0,0,0,0",
    },
    {
      "text": "SN 22 SN 149",
      "content": "C1;T1,1,5,5;M0,0,0,0;B1,2,1,5",
    },
    {
      "text": "DP 22",
      "content": "C4;T1,1,0,0;M5,1,5,5;B0,0,0,0",
    },
    {
      "text": "DP 23 (Center 4>5)",
      "content": "C5;T1,1,0,0;M5,1,5,5;B0,0,0,0",
    },
    {
      "text": "DP 25 AP 216K+",
      "content": "C5;T0,0,0,0;M5,1,5,5;B1,1,2,0",
    },
    {
      "text": "DP 26",
      "content": "C5;T0,0,0,0;M5,1,5,5;B1,1,3,0",
    },
    {
      "text": "DP 27",
      "content": "C5;T0,0,0,0;M5,1,5,5;B1,1,4,0",
    },
    {
      "text": "DP 28",
      "content": "C5;T0,0,0,0;M5,1,5,5;B1,1,5,0",
    },
    {
      "text": "DP 29 AP 221K+",
      "content": "C5;T1,1,0,0;M5,1,5,5;B1,1,4,0",
    },
    {
      "text": "AP 30 AP 250K+",
      "content": "C1;T1,1,1,5;M1,1,5,5;B1,2,1,5",
    },
    {
      "text": "DP 30",
      "content": "C5;T1,1,0,0;M5,1,5,5;B1,1,5,0",
    },
    {
      "text": "DP 31",
      "content": "C5;T1,1,1,1;M5,1,5,5;B1,1,4,0",
    },
    {
      "text": "AP 32 AP 293K+",
      "content": "C1;T1,1,1,5;M1,1,5,5;B1,4,1,5",
    },
    {
      "text": "DP 32",
      "content": "C5;T1,1,1,1;M5,1,5,5;B1,1,5,0",
    },
    {
      "text": "DP 33",
      "content": "C5;T1,1,1,2;M5,1,5,5;B1,1,5,0",
    },
    {
      "text": "DP 34",
      "content": "C5;T1,1,1,3;M5,1,5,5;B1,1,5,0",
    },
    {
      "text": "DP 35",
      "content": "C5;T1,1,1,4;M5,1,5,5;B1,1,5,0",
    },
    {
      "text": "DP 36",
      "content": "C5;T1,1,1,5;M5,1,5,5;B1,1,5,0",
    },
    {
      "text": "AP 37 AP 330K+",
      "content": "C1;T1,1,1,5;M1,1,5,5;B5,5,1,5",
    },
    {
      "text": "DP 37",
      "content": "C5;T1,1,1,5;M5,1,5,5;B1,1,5,1",
    },
    {
      "text": "DP 40 Unity",
      "content": "C4;T1,1,1,5;M1,1,5,5;B5,5,1,5",
    },
  ];

  tree_config.forEach((node) => {
    const node_element = document.createElement('div');
    node_element.classList.add('node');

    const text_element = document.createElement('span');
    text_element.classList.add('node-text');
    text_element.textContent = node.text;
    node_element.appendChild(text_element);

    const copy_button = document.createElement('button');
    copy_button.type = 'button';
    copy_button.classList.add('copy-btn');
    copy_button.textContent = '复制内容';
    copy_button.addEventListener('click', async () => {
      const original_text = copy_button.textContent;
      try {
        await navigator.clipboard.writeText(node.content);
      } catch (_error) {
        const temp_input = document.createElement('textarea');
        temp_input.value = node.content;
        temp_input.setAttribute('readonly', '');
        temp_input.style.position = 'absolute';
        temp_input.style.left = '-9999px';
        document.body.appendChild(temp_input);
        temp_input.select();
        document.execCommand('copy');
        document.body.removeChild(temp_input);
      }

      copy_button.classList.add('success');
      copy_button.textContent = '已复制';

      if (autoRedirectToggle && autoRedirectToggle.checked) {
        window.location.href = 'unitydl://test';
      }

      window.setTimeout(() => {
        copy_button.classList.remove('success');
        copy_button.textContent = original_text;
      }, 1000);
    });
    node_element.appendChild(copy_button);

    app.appendChild(node_element);

    const content_element = document.createElement('div');
    content_element.classList.add('content');
    content_element.textContent = node.content;
    node_element.appendChild(content_element);
  });
}

window.addEventListener('load', main);