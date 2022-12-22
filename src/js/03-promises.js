const refs = {
  formElement: document.querySelector('.form')
}

refs.formElement.addEventListener('submit', (e) => {
  
  e.preventDefault()
  
  const formData = new FormData(e.currentTarget);
  
  const dataParams = {};
  for (const [key, value] of formData.entries()) {
    dataParams[key] = Number(value);
  }
  let { amount, step, delay } = dataParams;
  for (let i = 1; i <= amount; i += 1) {
    delay += step;
    createPromise(i, delay).then(onSuccess).catch(onError);
    refs.formElement.reset();
  }
})

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });

      }
    }, delay);
  });
}

function onError({ position, delay }) {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
}


function onSuccess({ position, delay }) {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

