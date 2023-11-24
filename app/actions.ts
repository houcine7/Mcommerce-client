"use server";

const Payment_URL = `${process.env.NEXT_PUBLIC_PAYMENT_SERVICE_URL}/payments`;

export default async function submitPayment(formData) {
  let paymentObject: { [key: string]: any } = {};
  //
  const iterator = formData.entries();
  let nextEntry = iterator.next();

  //
  while (!nextEntry.done) {
    const entry = nextEntry.value;

    if (
      entry[0] === "cardNumber" ||
      entry[0] === "cardHolder" ||
      entry[0] === "cardNumber" ||
      entry[0] === "creditExpiry" ||
      entry[0] === "cardCvc"
    ) {
      paymentObject["cardDetails"] = {
        ...paymentObject["cardDetails"],
        [entry[0]]: entry[1],
      };
    } else {
      paymentObject[entry[0]] = entry[1];
    }

    nextEntry = iterator.next();
  }
  //
  console.log("paymentObject", paymentObject);

  try {
    const res = await fetch(Payment_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentObject),
    });

    const data = await res.json();
    console.log("data", data);
  } catch (err) {
    console.log(err);
  }
}
