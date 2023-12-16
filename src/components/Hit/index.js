import classNames from "classnames/bind";
import styles from "./Hit.module.scss";
import { Col, Row } from "antd";

const cx = classNames.bind(styles);

export default function Hit({ hit }) {
  return (
    <Row className={cx("wrapper")}>
      <Col flex="0 1 auto" className={cx("image-container")}>
        <img src={hit.image} alt={hit.president} className={cx("image")} />
      </Col>
      <Col className={cx("quote-container")}>
        <q className={cx("quote")}>{hit.quote}</q>
        <p className={cx("president")}>― {hit.president}</p>
      </Col>
    </Row>
  );
}
