(() => {
  // The first value in this array is always the front; the last is the rear.
  const values = [];
  const form = document.querySelector('#value-form');
  const input = document.querySelector('#value-input');
  const list = document.querySelector('#queue-list');
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
    values.forEach((value, index) => {
      const item = document.createElement('li');
      item.className = `queue-item${index === 0 ? ' is-front' : ''}`;
      const label = document.createElement('span');
      label.textContent = value;
      item.append(label);
      if (index === 0) {
        const hint = document.createElement('span');
        hint.className = 'item-hint';
        hint.textContent = 'FRONT';
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
    if (!value) return announce('Enter a value before enqueueing it.', 'error');
    values.push(value);
    input.value = '';
    render();
    announce(`${value} added at the rear of the queue.`, 'success');
    input.focus();
  });

  document.querySelector('#dequeue-button').addEventListener('click', () => {
    if (!values.length) return announce('The queue is empty. There is nothing to dequeue.', 'error');
    const removed = values.shift();
    deleted.textContent = removed;
    render();
    announce(`${removed} removed from the front of the queue.`, 'success');
  });

  document.querySelector('#peek-button').addEventListener('click', () => {
    if (!values.length) return announce('The queue is empty. There is no front value to peek at.', 'error');
    announce(`Front value is ${values[0]}. It remains in the queue.`, 'success');
  });

  document.querySelector('#clear-button').addEventListener('click', () => {
    values.length = 0;
    deleted.textContent = '—';
    render();
    announce('Queue and deleted area cleared.', 'success');
  });

  render();
})();
