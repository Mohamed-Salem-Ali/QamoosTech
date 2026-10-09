---
id: dag
category: programming
subcategory: data-structures
level: intermediate
related: [topological-sort, pipeline, binary-tree]
tags: [python]
aliases: ["dependency graph"]
term: "DAG (Directed Acyclic Graph)"
pronunciation: "DAG"
keywords: ["arrows with no loops", "airflow dags", "build dependency graph", "git history", "tasks and dependencies", "no cycles", "أسهم بلا حلقات", "‏DAGs في Airflow", "رسم اعتماديات البناء", "تاريخ Git", "المهام واعتمادياتها", "لا دورات"]
---

## Definition

A DAG is a graph whose edges have a direction and which has no cycles: following the arrows you can never return to where you started. It is the natural shape of tasks and their dependencies.

## Where you hear it

In Apache Airflow and CI pipelines, build systems, Git commit history and data processing frameworks.

## Examples

- Each Airflow workflow is defined as a DAG of tasks.
- Git history is a DAG of commits.
- The pipeline is a DAG: the deploy step waits for the build and the tests.

## Common mistake

Adding a dependency that points back. That creates a cycle and the DAG is no longer valid.

## Don't confuse with

A tree, which is a DAG where each node has exactly one parent. A DAG node may have several parents.

## Say it at work

- Model the pipeline as a DAG.
- Check for cycles before running.
