(() => {
  const values = [];
  const form = document.querySelector('#value-form');
  const input = document.querySelector('#value-input');
  const list = document.querySelector('#stack-list');
  const empty = document.querySelector('#empty-state');
  const count = document.querySelector('#count');
  const status = document.querySelector('#status');
  const deleted = document.querySelector('#deleted-value');

  function announce(message, kind = '') {
    status.textContent = message;
    status.dataset.kind = kind;
  }

  function render() {
    list.replaceChildren();
    [...values].reverse().forEach((value, index) => {
      const item = document.createElement('li');
      item.className = `stack-item${index === 0 ? ' is-top' : ''}`;
      const label = document.createElement('span');
      label.textContent = value;
      item.append(label);
      if (index === 0) {
        const hint = document.createElement('span');
        hint.className = 'item-hint';
        hint.textContent = 'TOP';
        item.append(hint);
      }
      list.append(item);
    });
    empty.hidden = values.length > 0;
    count.textContent = `${values.length} ${values.length === 1 ? 'item' : 'items'}`;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = input.value.trim();
    if (!value) return announce('Enter a value before pushing it.', 'error');
    values.push(value);
    input.value = '';
    render();
    announce(`${value} pushed onto the top of the stack.`, 'success');
    input.focus();
  });

  document.querySelector('#pop-button').addEventListener('click', () => {
    if (!values.length) return announce('The stack is empty. There is nothing to pop.', 'error');
    const removed = values.pop();
    deleted.textContent = removed;
    render();
    announce(`${removed} popped from the top of the stack.`, 'success');
  });

  document.querySelector('#peek-button').addEventListener('click', () => {
    if (!values.length) return announce('The stack is empty. There is no top value to peek at.', 'error');
    announce(`Top value is ${values.at(-1)}. It remains in the stack.`, 'success');
  });

  document.querySelector('#clear-button').addEventListener('click', () => {
    values.length = 0;
    deleted.textContent = '—';
    render();
    announce('Stack and deleted area cleared.', 'success');
  });

  render();
})();
