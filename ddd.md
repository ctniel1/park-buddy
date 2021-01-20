# Define Events

<ul>

    ## Account Events
    <li>account created</li>
    <li>account updated</li>
    <li>account deleted</li>
    <li>account password reset</li>

    ## Session Events
    <li>session created</li>
    <li>session deleted</li>

    ## Attraction Events
    <li>attraction created</li>
    <li>attraction updated</li>
    <li>attraction deleted</li>

    ## Queue Events
    <li>queue created</li>
    <li>queue updated</li>
    <li>queue deleted</li>

    ## Issue Events
    <li>issue created</li>
    <li>issue updated</li>

</ul>

# Define Commands

<ul>

    ## Account Commands
    <li>Create an Account</li>
    <li>Delete an Account</li>
    <li>Update password</li>

    ## Session Commands
    <li>Create a Session</li>
    <li>End a Session</li>

    ## Attraction Commands
    <li>Create an Attraction</li>
    <li>Update an Attraction</li>
    <li>Rate an Attraction</li>
    <li>Comment on an Attraction</li>
    <li>Delete an Attraction</li>

    ## Queue Commands
    <li>Create a Queue</li>
    <li>Enable a Queue</li>
    <li>Disable a Queue</li>
    <li>Delete a Queue</li>
    <li>Enter a Queue</li>

    ## Issue Commands
    <li>Create an issue</li>
    <li>Comment on an issue</li>

</ul>

# Define Entities

    ## User Account
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
                <td>username</td>
                <td>text</td>
                <td>User's chosen display name.</td>
            </tr>
            <tr>
                <td>password</td>
                <td>encrypted text</td>
                <td>The user's password, stored in a hashed format.</td>
            </tr>
        </tbody>
    </table>

    ## Attraction
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
                <td>name</td>
                <td>text</td>
                <td>Name of the attraction</td>
            </tr>
            <tr>
                <td>description</td>
                <td>text</td>
                <td>A description of the attraction for users</td>
            </tr>
            <tr>
                <td>rating</td>
                <td>decimal</td>
                <td>An average rating from all user ratings</td>
            </tr>
            <tr>
                <td>total ratings</td>
                <td>integer</td>
                <td>Keeps a running tally of how many ratings this attraction has received</td>
            </tr>
        </tbody>
    </table>

    ## Queue
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
                <td>rate</td>
                <td>integer</td>
                <td>The estimated speed at which this queue moves</td>
            </tr>
            <tr>
                <td>total users queued</td>
                <td>integer</td>
                <td>Keeps a running tally of how many users this attraction has queued</td>
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

# Define Value Objects

<ul>
    <li>There are not currently any Value Objects planned</li>
</ul>