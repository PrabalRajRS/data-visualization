import ReactJson from 'react18-json-view';

const JsonViewer = ({ data }) => <div className='chart-container'><h4>Json View</h4><ReactJson src={data} collapsed={1} /></div>;

export default JsonViewer;
