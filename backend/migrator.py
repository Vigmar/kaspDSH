import json

from neo4j import GraphDatabase


def create_and_return_greeting(tx, name):
    return tx.run("CREATE (n:Company {name:'" + name + "'})")


def link_cypher(tx, source_name, target_name):
    return tx.run(
        "MATCH (s:Company) WHERE s.name = '" + source_name + "' MATCH (t:Company) WHERE t.name = '" + target_name + "' CREATE (s)-[:TRANSFER]->(t)",
    )


if __name__ == '__main__':
    with open('graph.json') as json_file:
        data = json.load(json_file)
        driver = GraphDatabase.driver('neo4j://neo4j.mogbymo.io:7687', auth=('neo4j', 'neo4j'))
        with driver.session() as session:
            [session.write_transaction(create_and_return_greeting, node['id']) for node in data['nodes']]
            print("Nodes created")
            [session.write_transaction(link_cypher, link['source'], link['target']) for link in data['links']]
            print("Links created")
        driver.close()
