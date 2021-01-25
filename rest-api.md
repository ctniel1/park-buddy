# Rest API
<table>
    <thead>
      <tr>
        <th>Query</th>
        <th>Url Fragment</th>
        <th>HTTP Method</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>create an account</td>
        <td>/accounts</td>
        <td>POST</td>
      </tr>
      <tr>
        <td>delete an account</td>
        <td>/accounts/{account_id}</td>
        <td>DELETE</td>
      </tr>
      <tr>
        <td>update password</td>
        <td>/accounts/{account_id}</td>
        <td>POST</td>
      </tr>
      <tr>
        <td>create a session</td>
        <td>/session</td>
        <td>POST</td>
      </tr>
      <tr>
        <td>delete a session</td>
        <td>/session/{session_id}</td>
        <td>DELETE</td>
      </tr>
      <tr>
        <td>create an attraction</td>
        <td>/attraction</td>
        <td>POST</td>
      </tr>
      <tr>
        <td>update an attraction</td>
        <td>/attraction/{attraction_id}</td>
        <td>POST</td>
      </tr>
      <tr>
        <td>get attractions</td>
        <td>/attraction</td>
        <td>GET</td>
      </tr>
      <tr>
        <td>get an attraction</td>
        <td>/attraction/{attraction_id}</td>
        <td>GET</td>
      </tr>
      <tr>
        <td>delete an attraction</td>
        <td>/attraction/{attraction_id}</td>
        <td>DELETE</td>
      </tr>
      <tr>
        <td>create a queue</td>
        <td>/queue</td>
        <td>POST</td>
      </tr>
      <tr>
        <td>update a queue</td>
        <td>/queue/{queue_id}</td>
        <td>POST</td>
      </tr>
      <tr>
        <td>get a queue</td>
        <td>/queue/{queue_id}</td>
        <td>GET</td>
      </tr>
      <tr>
        <td>delete a queue</td>
        <td>/queue/{queue_id}</td>
        <td>DELETE</td>
      </tr>
      <tr>
        <td>create an issue</td>
        <td>/issue</td>
        <td>POST</td>
      </tr>
      <tr>
        <td>update an issue</td>
        <td>/issue/{issue_id}</td>
        <td>POST</td>
      </tr>
    </tbody>
  </table>

  ## Issue
  <table>
    <thead>
      <tr>
        <th>Property</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>id</td>
        <td>UUID</td>
        <td>Automatically generated, immutable, unique identifier.</td>
      </tr>
      <tr>
        <td>attraction id</td>
        <td>UUID</td>
        <td>Attraction that this queue belongs to</td>
      </tr>
      <tr>
        <td>comment</td>
        <td>text</td>
        <td>The message that is posted as an issue</td>
      </tr>
    </tbody>
  </table>