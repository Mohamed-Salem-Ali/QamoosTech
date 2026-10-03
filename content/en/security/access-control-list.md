---
id: access-control-list
category: security
level: intermediate
related: [authentication-vs-authorization, rbac]
term: "Access Control List (ACL)"
pronunciation: "AK-ses kohn-trohl list"
---

## Definition

An Access Control List (ACL) is a list of permissions attached to a specific resource that defines which users or system processes are granted access to that resource.

## Where you hear it

- In cloud storage bucket configurations
- During network firewall setup
- When managing file system permissions on a server

## Examples

- The cloud storage bucket uses an ACL to grant public read access to specific image files.
- We updated the network ACL to block incoming traffic from suspicious IP addresses.

## Common mistake

Confusing ACLs with Role-Based Access Control (RBAC), where ACLs attach permissions directly to resources for individual users or groups, while RBAC assigns permissions to roles and assigns users to those roles.

## Don't confuse with

ACL vs. RBAC: ACLs define permissions at the resource level for specific users, whereas RBAC manages access by assigning permissions to roles that are then granted to users.

## Say it at work

- Can you check the ACL on that bucket to see why the service account is getting a 403 error?
- I have updated the ACL for the production directory to restrict write access to the deployment user only.
