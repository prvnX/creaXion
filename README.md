<h1>Creaxion - AI Image Generation App</h1>
<h2>Features</h2>
    <ul>
        <li>Supports image generation from text prompts in both <strong>Sinhala</strong> and <strong>English</strong></li>
        <li>Interface language toggle between Sinhala and English</li>
        <li>Fully responsive design for compatibility across devices</li>
        <li>High-quality image downloads in <strong>PNG format</strong></li>
    </ul>

<h2>Technologies Used</h2>
    <ul>
        <li><strong>Frontend:</strong> <a href="https://reactjs.org/">React.js</a></li>
        <li><strong>Backend:</strong> <a href="https://nodejs.org/">Node.js</a> &amp; <a href="https://expressjs.com/">Express</a></li>
        <li><strong>API Integration:</strong> <a href="https://axios-http.com/">Axios</a></li>
        <li><strong>AI Model:</strong> <a href="https://www.nvidia.com/">NVIDIA’s Stable Diffusion XL</a></li>
        <li><strong>Translation:</strong> <a href="https://cloud.google.com/translate">Google Cloud Translation API</a></li>
    </ul>

<h2>Environment Setup</h2>
      <h3>1. Clone the Repository</h3>
      <pre><code>git clone GitHub_Repo_Link
cd Creaxion
    </code></pre>

<h3>2. Configure Environment Variables</h3>
    <p>Create a <code>.env</code> file in the root directory and add the following:</p>
    <pre><code>NVIDIA_API_KEY= MYAPIKEY #Replace this with your NVIDIA API key
CREDENTIALS= google services json format object #replace with the path to your Google service account JSON file
PORT=5000 #replace with your preferred port for the backend
    </code></pre>
    <p>Ensure the Google service account JSON file (usually named <code>google-credentials.json</code>) is referenced correctly in the <code>.env</code> file as <code>CREDENTIALS=google-credentials.json</code>.</p>

  <h3>3. Install Dependencies</h3>
    <p>Install dependencies in both <code>frontend</code> and <code>backend</code> directories:</p>

  <h4>Backend</h4>
    <pre><code>cd creaxion-backend
npm install
    </code></pre>

  <h4>Frontend</h4>
    <pre><code>cd ../my-app
npm install
    </code></pre>

  <h3>4. Start the Application</h3>
    <p>To start both backend and frontend servers:</p>

  <h4>Backend Server</h4>
    <pre><code>cd backend
node server.js    </code></pre>

  <h4>Frontend Server</h4>
    <pre><code>cd ../my-app
npm start
    </code></pre>
    <p>Frontend runs at <code>http://localhost:3000</code> and backend on the specified <code>PORT</code> in your <code>.env</code> file.</p>

