import { Helmet } from "react-helmet";


const Loading = () => {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Helmet>
          <title>Loading Page || GameScope</title>
        </Helmet>
        <span className="loading loading-bars loading-md"></span>
      </div>
    );
};

export default Loading;