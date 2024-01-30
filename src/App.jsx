import "./App.css";
import Clock from "./Clock";
import Timer from "./Timer";
const App = () => {
  return (
    <div>
      <div>
        <Clock city="Stockholm" timeZone="Europe/Stockholm" />
        <Clock city="Istanbul" timeZone="Europe/Istanbul" />
        <Clock city="Dubai" timeZone="Asia/Dubai" />
        <Clock city="New York" timeZone="America/New_york" />
      </div>
      <div>
        <Timer initialSeconds={300} />
        <Timer initialSeconds={600} />
      </div>
    </div>
  );
};
export default App;
