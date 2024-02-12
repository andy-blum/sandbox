function runCount() {
  console.clear();

  console.log('%cRun `runCount()` to re-count nodes', 'color:red;background-color:white;font-size:2rem;');

  window.countNodes = (node) => {
    let nodeCounter = 0;
    let commentCounter = 0;
    let interCounter = 0;

    counter = function(node) {
        nodeCounter++;

        if (node.nodeType === 8) {
            commentCounter++;
        }

        if (node.nodeType === 3 && node.textContent.trim() === '') {
            interCounter++;
        }

        if (node.childNodes) {
            Array.from(node.childNodes).forEach((childnode) => {
                counter(childnode);
            })
        }

        if (node.shadowRoot) {
            counter(node.shadowRoot);
        }
    };

    counter(node ?? document);
    return {
      nodes: nodeCounter,
      comments: commentCounter,
      inters: interCounter,
    };
  }

  const customElements = [...document.querySelectorAll('*')].filter(el => {
    const prefixes = ['dds', 'bx'];
    const tagPrefix = el.tagName.toLowerCase().split('-')[0];

    return prefixes.includes(tagPrefix);
  });

  const sortedBySubtree = customElements
    .map(el => {
      const {nodes: innerNodes} = window.countNodes(el);
      return {
        element: el,
        contains: innerNodes,
      };
    })
    .sort(({contains: a}, {contains: b}) => Math.min(Math.max((b - a), -1), 1))
    .slice(0, 24);

  const sortedByShadow = customElements
    .map(el => {
      let shadowCount = 0;
      if (el.shadowRoot) {
        shadowCount = window.countNodes(el.shadowRoot).nodes;
      }
      return {
        element: el,
        contains: shadowCount,
      };
    })
    .sort(({contains: a}, {contains: b}) => Math.min(Math.max((b - a), -1), 1))
    .slice(0, 24);

  const sortedByComments = customElements
    .map(el => {
      let shadowCount = 0;
      if (el.shadowRoot) {
        shadowCount = window.countNodes(el.shadowRoot).comments;
      }
      return {
        element: el,
        contains: shadowCount,
      };
    })
    .sort(({contains: a}, {contains: b}) => Math.min(Math.max((b - a), -1), 1))
    .slice(0, 24);

  const sortedByBlankLines = customElements
    .map(el => {
      let shadowCount = 0;
      if (el.shadowRoot) {
        shadowCount = window.countNodes(el.shadowRoot).inters;
      }
      return {
        element: el,
        contains: shadowCount,
      };
    })
    .sort(({contains: a}, {contains: b}) => Math.min(Math.max((b - a), -1), 1))
    .slice(0, 24);

  const sortedByStyles = customElements
    .map(el => {
      if (el.shadowRoot) {
        return [...el.shadowRoot.adoptedStyleSheets].reduce((prev, curr) => {
          let {element, stylesheetCount, ruleCount, weight} = prev;

          stylesheetCount ++;
          ruleCount += curr.cssRules.length;
          weight += Array.from(curr.cssRules).reduce((a,c) => (a + c.cssText.length), 0)

          return {
            element,
            stylesheetCount,
            ruleCount,
            weight
          };
        }, {
          element: el,
          stylesheetCount: 0,
          ruleCount: 0,
          weight: 0,
        });
      }
    })
    .sort(({weight: a}, {weight: b}) => Math.min(Math.max((b - a), -1), 1))
    .slice(0, 24);

  console.groupCollapsed('Page Info');
  console.table(countNodes());
  console.groupEnd();

  console.groupCollapsed('Largest Subtrees');
  console.table(sortedBySubtree);
  console.groupEnd();

  console.groupCollapsed('Largest Shadow Roots');
  console.table(sortedByShadow);
  console.groupEnd();

  console.groupCollapsed('Heaviest Stylesheets');
  console.table(sortedByStyles);
  console.groupEnd();

  // Comments outside of shadowroots should be 0 after HTML minification
  console.groupCollapsed('Most Comments in Shadow Roots');
  console.table(sortedByComments);
  console.groupEnd();

  // Blank lines outside of shadowroots should be 0 after HTML minification
  console.groupCollapsed('Most Blank Lines in Shadow Roots');
  console.table(sortedByBlankLines);
  console.groupEnd();
}

setTimeout(runCount, 1000);
