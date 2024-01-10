export async function getAllRashi() {
  try {
    const res = await fetch("http://127.0.0.1:4000/");

    if (!res.ok) throw new Error(`Issue in getting all Rashis- ${res.status}`);

    const data = await res.json();

    return data.data;
  }
  catch (err) {
    console.log("Error:", err.message)
  }

}

export async function getRashiById(id) {
  try {
    const res = await fetch(`http://127.0.0.1:4000/${id}`)

    if (!res.ok) throw new Error("Issue in fetching the rashi details");

    const data = await res.json();

    return data.data;

  } catch (err) {
    console.log("Error:", err.message)
  }
}
