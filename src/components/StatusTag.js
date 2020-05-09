import React from "react";

const StatusTag = ({ status }) => {
  switch (status) {
    case "IN_PROGRESS":
      return (
        <span className="tag is-small is-warning" style={{ marginRight: 20 }}>
          In Progress
        </span>
      );
    case "ARCHIVED":
      return (
        <span className="tag is-small is-danger" style={{ marginRight: 20 }}>
          Archived
        </span>
      );
      case "COMPLETE":
        return (
          <span className="tag is-small is-success" style={{ marginRight: 20 }}>
            Complete
          </span>
        );
    default:
      return <span></span>;
  }
};

export default StatusTag;
