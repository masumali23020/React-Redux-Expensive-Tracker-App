import Blance from "./componenets/Blance";
import Form from "./componenets/Form";
import Layout from "./componenets/Layout";
import Trnsections from "./componenets/Transection/Trnsections";

function App() {
    return (
       <>
       <Layout>
        <Blance />
        <Form />
        <Trnsections />

       </Layout>
       </>
    );
}

export default App;
