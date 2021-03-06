export default function MainStyle() {
  return (
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
      }
      
      * {
        box-sizing: border-box;
      }

      *:focus {
        outline: none;
      }
      
      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      footer img {
        margin-left: 0.5rem;
      }
      
      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      a {
        color: inherit;
        text-decoration: none;
      }
      
      button {
        margin-right: 15px;
      }
      
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      .title a {
        color: #0070f3;
        text-decoration: none;
      }
      
      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }
      
      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }
      
      .title,
      .description {
        text-align: center;
      }
      
      .description {
        line-height: 1.5;
        font-size: 1.5rem;
        margin-top: 1rem;
      }
      
      .grid {
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        margin-top: 6.2rem;
      }
      
      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        color: inherit;
        text-align: left;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }
      
      .card-item {
        cursor: pointer;
        margin: 8px 0;
      }

      .card-item:hover {
        box-shadow: 0px 0px 14px -4px rgba(153,153,153,1);
      }
      
      .card-list {
        flex: 1;
        max-height: 600px;
        overflow-y: scroll;
      }

      .card-detail {
        flex: 3;
      }

      .card-action-bar {
        position: absolute;
        right: 0;
        top: -35px;
      }

      .card-action-bar input {
        opacity: 0;
        width: 0;
      }

      .card-action-bar input.show {
        transition: all 0.3s;
        opacity: 1;
        width: auto;
        max-width: 250px;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }
      
      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }
      
      .card-detail p {
        padding-top: 15px;
        padding-bottom: 20px;
      }

      .dragdrop-item {
        display: flex;
      }
      
      .dragdrop-item span {
        width: 170px;
        margin-top: 5px;
      }
      
      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }

      @media (max-width: 768px) {
        .grid {
          display: block;
        }

        .card-action-bar {
          position: relative;
        }

        .card-action-bar * {
          display: block;
          margin: 10px;
        }

        footer a {
          flex-flow: wrap;
        }
      }
    `}
    </style>
  );
}