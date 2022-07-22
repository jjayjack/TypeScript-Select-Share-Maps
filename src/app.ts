const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;
function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;
  console.log(enteredAddress);

  //   Send to API
}

form.addEventListener("submit", searchAddressHandler);
