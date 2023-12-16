"use client";

import algoliasearch from "algoliasearch/lite";
import classnames from "classnames/bind";
import { BiSearchAlt } from "react-icons/bi";
import { Col, Divider, Space } from "antd";
import {
  InstantSearch,
  RefinementList,
  InfiniteHits,
  SearchBox,
} from "react-instantsearch";
import styles from "./page.module.scss";
import Hit from "@/components/Hit";

const cx = classnames.bind(styles);

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY
);

export default function Home() {
  return (
    <main className={cx("main")}>
      <InstantSearch
        searchClient={searchClient}
        indexName="US_PRESIDENT_QUOTES"
      >
        <div className={cx("header")}>
          <h1 className={cx("title")}>US President Quotes</h1>
          <img src="/icon.png" className={cx("icon")} />
        </div>
        <div className={cx("search-wrapper")}>
          <SearchBox
            className={cx("search-box")}
            placeholder="Search for quotes"
            submitIconComponent={({ classNames }) => (
              <div className={classNames.submitIcon}>
                <BiSearchAlt size={20} />
              </div>
            )}
          />
        </div>

        <div className={cx("content")}>
          <Col flex="210px">
            <Space
              direction="vertical"
              size="middle"
              className={cx("left-tab")}
            >
              <div>
                <h3>President</h3>
                <Divider className={cx("divider")} />
                <RefinementList attribute="president" title="President" />
              </div>
            </Space>
          </Col>
          <Divider type="vertical" className={cx("vertical-divider")} />
          <Col flex="auto">
            <Space
              direction="vertical"
              size="small"
              className={cx("right-tab")}
            >
              <h2>Search results</h2>
              <InfiniteHits hitComponent={Hit} showPrevious={false} />
            </Space>
          </Col>
        </div>
      </InstantSearch>
    </main>
  );
}
