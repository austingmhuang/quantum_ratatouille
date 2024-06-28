def process_graph(nodes, edges):
    """Convert the list of nodes and edges to a dictionary
    structure. 

    Args:
        nodes (list[dict]): The set of nodes 
        edges (list[dict]): The set of edges 

    Returns: 
        processed_nodes (dict): {node_id (str): node_data (dict)}
        get_src_dict (dict): {node_id (str): source_node_ids (list)}  # store backwards edge connection info
        get_tar_dict (dict): {node_id (str): target_node_ids (list)}  # stores forwards edge connection info

    """
    processed_nodes = {node.pop("id"): node for node in nodes}

    get_src_dict = {}
    get_tar_dict = {}
    for edge in edges:
        s, t = (edge["source"], edge["target"])
        
        sh, th = (edge.get("sourceHandle"), edge.get("targetHandle"))
        sh = str(sh) if sh else ""
        th = str(th) if th else ""

        # src dictionary: node_id --> list of source node ids + handles
        if get_src_dict.get(t) is None:
            get_src_dict[t] = [(s, sh)]
        else: 
            get_src_dict[t].append((s, sh)) 

        # tar dictionary: node_id --> list of target node ids + handles
        if get_tar_dict.get(s) is None:
            get_tar_dict[s] = [(t, th)]
        else: 
            get_tar_dict[s].append((t, th)) 

    return processed_nodes, get_src_dict, get_tar_dict
