import PropTypes from 'prop-types'

function Project(props) {
    return (
        <div className="card">
            <img className="project-card" src={props.url} alt="project image" />
            <h2>{props.name}</h2>
            <p className="cause">{props.cause}</p>

            <button>Donate Now</button>


        </div>

    );
}
Project.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string,
    cause: PropTypes.string
};

export default Project;

