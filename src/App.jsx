import "./App.css";

function App() {
  return (
    <div className="flex w-[800px] gap-20 rounded-xl bg-white py-16 px-20 shadow-white">
      <div className="grid gap-6">
        <div className="relative flex h-48 w-48 rounded-full border-4 border-green-400">
          <img
            src="../public/asserts/nat.webp"
            alt="Nature"
            className="rounded-full"
          />
          <div className="absolute top-32 -right-2 flex h-6 w-10 justify-center rounded-md bg-green-500">
            +
          </div>
        </div>
        <div className="h-2 w-full bg-amber-100" />
        <div className="flex justify-around">
          <p className="text-gray-400">
            Rating
            <div className="text-green-400">* * * * * </div>
          </p>
          <p className="text-gray-400">
            Activity
            <div className="text-green-400">90%</div>
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="flex h-fit justify-between">
          <div className="flex flex-col items-start">
            <p className="font-extrabold text-black">Bheem</p>
            <p className="text-gray-400">TamilNadu</p>
          </div>
          <div className="flex h-8 w-24 items-center justify-center gap-3 rounded-md bg-green-500">
            <div className="h-4 w-4 rounded-full bg-gray-600">
              <img src="../public/asserts/pencil.svg" alt="Edit icon" />
            </div>
            <p className="text-white">EDIT</p>
          </div>
        </div>
        <div>
          <div className="flex gap-16">
            <p className="text-gray-400">Email</p>
            <p className="font-black text-black">Bheem@chotta.com</p>
          </div>
          <div className="flex gap-16">
            <p className="text-gray-400">City</p>
            <p className="font-black text-black">Dholakpur</p>
          </div>
          <div className="flex gap-16">
            <p className="text-gray-400">State</p>
            <p className="font-black text-black">Tamilnadu</p>
          </div>
          <div className="flex gap-16">
            <p className="text-gray-400">Country</p>
            <p className="font-black text-black">India</p>
          </div>
          <div className="flex gap-16">
            <p className="text-gray-400">Phone</p>
            <p className="font-black text-black">9876543210</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
